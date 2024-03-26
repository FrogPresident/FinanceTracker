import { Request, Response, NextFunction } from 'express';
import TransactionRepository from '../repositories/transactionRepository';

export const transactionController = {
    async transactionList(req: Request, res: Response, next: NextFunction) {
        try {
            const transactions = await TransactionRepository.getAllTransactions();
            res.json(transactions);
        } catch (err) {
            next(err);
        }
    },
    transactionCreateGet(req: Request, res: Response) {
        res.render('transactionCreate', {
            title: 'Create Transaction'
        });
    },
    transactionCreatePost(req: Request, res: Response) {
        res.send('Transaction create POST page');
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
