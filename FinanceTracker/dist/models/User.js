"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 100,
        unique: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        maxlength: 100,
        unique: true
    }
});
userSchema.methods.validatePassword = function (password) {
    return bcryptjs_1.default.compareSync(password, this.password);
};
userSchema.virtual('transactions', {
    ref: 'Transaction',
    localField: '_id',
    foreignField: 'User'
});
userSchema.virtual('category', {
    ref: 'Category',
    localField: '_id',
    foreignField: 'User'
});
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
