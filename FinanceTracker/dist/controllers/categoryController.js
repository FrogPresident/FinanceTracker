"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const categoryRepository_1 = __importDefault(require("../repositories/categoryRepository"));
exports.categoryController = {
    async categoryList(req, res) {
        try {
            const categories = await categoryRepository_1.default.getAllCategories();
            res.json(categories);
        }
        catch (error) {
            res.status(500).send('Error Show Categories List' + error.message);
        }
    },
    categoryCreateGet(req, res) {
        res.send('Category create GET page');
    },
    categoryCreatePost(req, res) {
        res.send('Category create POST action');
    },
    categoryDeleteGet(req, res) {
        res.send('Category delete GET page');
    },
    categoryDeletePost(req, res) {
        res.send('Category delete POST action');
    },
    categoryUpdateGet(req, res) {
        res.send('Category update GET page');
    },
    categoryUpdatePost(req, res) {
        res.send('Category update POST action');
    },
};
exports.default = exports.categoryController;
