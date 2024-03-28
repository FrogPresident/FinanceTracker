"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
class UserRepository {
    getAllUsers() {
        return User_1.default.find().sort({ Username: -1 }).exec();
    }
    create(data) {
        const user = new User_1.default(data);
        return user.save();
    }
    async findByUsername(username) {
        return await User_1.default.findOne({ username: username }).exec();
    }
}
exports.default = new UserRepository();
