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
    categoryCreateGet(req: Request, res: Response) {
        res.send('Category create GET page');
    },
    categoryCreatePost(req: Request, res: Response) {
        res.send('Category create POST action');
    },
    categoryDeleteGet(req: Request, res: Response) {
        res.send('Category delete GET page');
    },
    categoryDeletePost(req: Request, res: Response) {
        res.send('Category delete POST action');
    },
    categoryUpdateGet(req: Request, res: Response) {
        res.send('Category update GET page');
    },
    categoryUpdatePost(req: Request, res: Response) {
        res.send('Category update POST action');
    },
};

export default categoryController;
