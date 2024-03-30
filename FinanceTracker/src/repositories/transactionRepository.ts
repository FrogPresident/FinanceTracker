import Transaction, { ITransaction } from '../models/Transaction';
import mongoose from 'mongoose';

class TransactionRepository {
    getAllTransactions(userId?: mongoose.Types.ObjectId) {
        if (userId) {
            return Transaction.find({user:userId}).sort({ date: -1 }).exec();
        }else{
            return Transaction.find();
        }
    }
    create(data: ITransaction) {
        const transaction = new Transaction(data);
        return transaction.save();
    }

}

export default new TransactionRepository();
