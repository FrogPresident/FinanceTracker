"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const categoryRepository_1 = __importDefault(require("../repositories/categoryRepository"));
const Category_1 = __importDefault(require("../models/Category"));
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
    // categoryCreateGet(req: Request, res: Response) {
    //     res.render('categoryCreate',{title:'Create Category'});
    // },
    async categoryCreate(req, res) {
        try {
            const { name } = req.body;
            const user = req.session.user;
            const categoryData = {
                name,
                user: user._id
            };
            const newCategory = await categoryRepository_1.default.create(categoryData);
            res.redirect('/api/home');
        }
        catch (error) {
            res.status(500).send('Error creating category' + error.message);
        }
    },
    async categoryDelete(req, res) {
        try {
            const categoryId = req.params.id;
            const deleteCategoryId = await Category_1.default.findByIdAndDelete(categoryId);
            if (!deleteCategoryId) {
                return res.status(404).send('Category not found');
            }
            res.send('Category deleted successfully');
        }
        catch (error) {
            res.status(500).send('Error delete category' + error.message);
        }
    },
    async categoryUpdate(req, res) {
        try {
            const categoryId = req.params.id;
            const { name } = req.body;
            const updateCategory = await Category_1.default.findByIdAndUpdate(categoryId, { name }, { new: true });
            if (!updateCategory) {
                return res.status(404).send("Category not found");
            }
        }
        catch (error) {
            res.status(500).send('Error update category' + error.message);
        }
    },
};
exports.default = exports.categoryController;
