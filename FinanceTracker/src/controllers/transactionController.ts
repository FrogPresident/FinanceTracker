import { Request, Response, NextFunction } from 'express';
import TransactionRepository from '../repositories/transactionRepository';
import categoryRepository from '../repositories/categoryRepository';


export const transactionController = {
    async home(req: Request, res: Response) {
        try {
            const userId = req.session.user?._id;
            const transactions = await TransactionRepository.getAllTransactions(userId);
            res.render('home', { title: 'Transactions', transactions: transactions })
        } catch (error: any) {
            res.status(500).send("Error Create Home page" + error.message)
        }
    },
    async transactionList(req: Request, res: Response, next: NextFunction) {
        try {
            const transactions = await TransactionRepository.getAllTransactions();
            res.json(transactions);
        } catch (err) {
            next(err);
        }
    },
    async transactionCreateGet(req: Request, res: Response) {
        try {
            const categories = await categoryRepository.getAllCategories();
            res.render('transactionCreate', { title: 'Create  Transacation' ,categories:categories})
            console.log(categories)
        } catch (error: any) {
            res.status(500).send('Error loading page: ' + error.message);
        }

    },
    async transactionCreatePost(req: Request, res: Response) {
        try {
            const { date, description, transactionType, amount ,categoryIds} = req.body;
            const user = req.session.user;
            const transactionData = {
                date,
                description,
                transactionType,
                amount,
                user: user._id
            };
            // Create Transaction
            const newTransaction = await TransactionRepository.create(transactionData);

            // Create Association between Transaction and Category

            if (categoryIds && categoryIds.length > 0) {
                await Promise.all(categoryIds.map(categoryId => 
                    TransactionCategoryAssociationRepository.create({
                        transaction: newTransaction._id,
                        category: categoryId
                    })
                ));
            }

            res.redirect('/home');

        } catch (error: any) {
            res.status(500).send('Error creating transaction' + error.message)
        }
    },
    transactionDeleteGet(req: Request, res: Response) {
        res.send('Transaction delete GET page');
    },
    transactionDeletePost(req: Request, res: Response) {
        res.send('Transaction delete POST action');
    },
    transactionUpdateGet(req: Request, res: Response) {
        res.send('Transaction update GET page');
    },
    transactionUpdatePost(req: Request, res: Response) {
        res.send('Transaction update POST action');
    },
};

export default transactionController;
