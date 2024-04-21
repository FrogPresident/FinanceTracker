import { Request, Response } from 'express';
import CategoryRepository from '../repositories/categoryRepository';
import Category from '../models/Category';

export const categoryController = {
    async categoryList(req: Request, res: Response) {
        try {
            const categories = await CategoryRepository.getAllCategories()
            res.json(categories)
        } catch (error: any) {
            res.status(500).send('Error Show Categories List' + error.message)
        }
    },
    // categoryCreateGet(req: Request, res: Response) {
    //     res.render('categoryCreate',{title:'Create Category'});
    // },
    async categoryCreate(req: Request, res: Response) {
        try {
            const { name } = req.body;
            const user = req.session.user;
            const categoryData = {
                name,
                user: user._id
            }
            const newCategory = await CategoryRepository.create(categoryData);
            res.redirect('/api/home');
        } catch (error: any) {
            res.status(500).send('Error creating category' + error.message);
        }
    },
    async categoryDelete(req: Request, res: Response) {
        try {
            const categoryId = req.params.id;
            const deleteCategoryId = await Category.findByIdAndDelete(categoryId);
            if (!deleteCategoryId) {
                return res.status(404).send('Category not found')
            }
            res.send('Category deleted successfully')
        } catch (error: any) {
            res.status(500).send('Error delete category' + error.message)
        }
    },
    async categoryUpdate(req: Request, res: Response) {
        try {
            const categoryId = req.params.id
            const { name } = req.body
            const updateCategory = await Category.findByIdAndUpdate(categoryId, { name }, { new: true })
            if(!updateCategory){
                return res.status(404).send("Category not found")
            }

        } catch (error: any) {
            res.status(500).send('Error update category' + error.message)
        }
    },
};

export default categoryController;
