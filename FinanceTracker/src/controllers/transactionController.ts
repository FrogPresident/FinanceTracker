import { Request, Response, NextFunction } from 'express';
import TransactionRepository from '../repositories/transactionRepository';

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
    transactionCreateGet(req: Request, res: Response) {
        res.render('transactionCreate', { title: 'Create  Transacation' })
        console.log(req.session.user)
    },
    async transactionCreatePost(req: Request, res: Response) {
        try {
            const { date, description, transactionType, amount } = req.body;
            const user = req.session.user;
            const transactionData = {
                date,
                description,
                transactionType,
                amount,
                user: user._id
            };
            const newTransaction = await TransactionRepository.create(transactionData);
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
