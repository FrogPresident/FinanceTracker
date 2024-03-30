"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../models/Category"));
class CategoryRepository {
    getAllCategories() {
        return Category_1.default.find().sort({ name: -1 }).exec();
    }
    create(data) {
        const category = new Category_1.default(data);
        return category.save();
    }
}
exports.default = new CategoryRepository();
