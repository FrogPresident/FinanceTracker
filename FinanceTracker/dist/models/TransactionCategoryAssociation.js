"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transactionCategoryAssociationSchema = new mongoose_1.default.Schema({
    transaction: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true
    },
    category: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});
const TransactionCategoryAssociation = mongoose_1.default.model('TransactionCategoryAssociation', transactionCategoryAssociationSchema);
exports.default = TransactionCategoryAssociation;
