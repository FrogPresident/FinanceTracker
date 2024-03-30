"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
categorySchema.virtual('transactions', {
    ref: 'TransactionCategoryAssociation',
    localField: '_id',
    foreignField: 'category'
});
const Category = mongoose_1.default.model('Category', categorySchema);
exports.default = Category;
