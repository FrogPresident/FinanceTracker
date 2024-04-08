import Transaction, { ITransaction } from '../models/Transaction';
import mongoose from 'mongoose';

class TransactionRepository {
    async getAllTransactions(userId?: mongoose.Types.ObjectId) {
        let matchStage = {};
        if (userId) {
            matchStage = { user: new mongoose.Types.ObjectId(userId) };
        }

        const transactions = await Transaction.aggregate([
            { $match: matchStage },
            {
                $lookup: {
                    from: "transactioncategoryassociations",
                    localField: "_id",
                    foreignField: "transaction",
                    as: "categories"
                }
            },
            {
                $lookup: {
                    from: "categories", 
                    localField: "categories.category",
                    foreignField: "_id",
                    as: "categoryDetails"
                }
            },
            {
                $addFields: {
                    categories: "$categoryDetails"
                }
            },
            {
                $project: {
                    categoryDetails: 0 
                }
            }
        ]).exec();
        
        transactions.forEach(transaction => {
            transaction.formattedDate = transaction.date.toLocaleDateString('zh-TW', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
        });

        return transactions;
    }
    create(data: ITransaction) {
        const transaction = new Transaction(data);
        return transaction.save();
    }

}

export default new TransactionRepository();
