import { Request, Response } from 'express';
import CategoryRepository from '../repositories/categoryRepository';

export const categoryController = {
    async categoryList(req: Request, res: Response) {
        try{
            const categories = await CategoryRepository.getAllCategories()
            res.json(categories)
        }catch(error:any){
            res.status(500).send('Error Show Categories List'+error.message)
        }
    },
    // categoryCreateGet(req: Request, res: Response) {
    //     res.render('categoryCreate',{title:'Create Category'});
    // },
    async categoryCreate(req: Request, res: Response) {
        try{
            const {name} =req.body;
            const user = req.session.user;
            const categoryData = {
                name,
                user:user._id
            }
            const newCategory = await CategoryRepository.create(categoryData);
            res.redirect('/api/home');
        }catch(error:any){
            res.status(500).send('Error creating category'+error.message);
        }
    },
    categoryDelete(req: Request, res: Response) {
        res.send('Category delete POST action');
    },
    categoryUpdate(req: Request, res: Response) {
        res.send('Category update POST action');
    },
};

export default categoryController;
