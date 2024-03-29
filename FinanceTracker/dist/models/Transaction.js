"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transactionSchema = new mongoose_1.default.Schema({
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 255
    },
    transactionType: {
        type: String,
        required: true,
        maxlength: 255
    },
    amount: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
transactionSchema.virtual('categories', {
    ref: 'TransactionCategoryAssociation',
    localField: '_id',
    foreignField: 'transaction'
});
transactionSchema.virtual('formattedDate').get(function () {
    const formattedDate = this.date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    return formattedDate;
});
const Transaction = mongoose_1.default.model('Transaction', transactionSchema);
exports.default = Transaction;
