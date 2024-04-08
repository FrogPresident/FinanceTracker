"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = __importDefault(require("../models/Transaction"));
const mongoose_1 = __importDefault(require("mongoose"));
class TransactionRepository {
    async getAllTransactions(userId) {
        let matchStage = {};
        if (userId) {
            matchStage = { user: new mongoose_1.default.Types.ObjectId(userId) };
        }
        const transactions = await Transaction_1.default.aggregate([
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
    create(data) {
        const transaction = new Transaction_1.default(data);
        return transaction.save();
    }
}
exports.default = new TransactionRepository();
