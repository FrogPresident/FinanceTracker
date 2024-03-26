"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = __importDefault(require("../models/Transaction"));
class TransactionRepository {
    getAllTransactions() {
        return Transaction_1.default.find().sort({ date: -1 }).exec();
    }
    create(data) {
        const transaction = new Transaction_1.default(data);
        return transaction.save();
    }
}
exports.default = new TransactionRepository();
