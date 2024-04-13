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
    categoryDelete(req, res) {
        res.send('Category delete POST action');
    },
    categoryUpdate(req, res) {
        res.send('Category update POST action');
    },
};
exports.default = exports.categoryController;
