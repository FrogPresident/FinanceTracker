"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    Username: {
        type: String,
        required: true,
        maxlength: 100,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        maxlength: 100
    },
    Email: {
        type: String,
        required: true,
        maxlength: 100,
        unique: true
    }
});
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
