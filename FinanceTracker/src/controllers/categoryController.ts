import { Request, Response } from 'express';

export const categoryController = {
    categoryList(req: Request, res: Response) {
        res.send('Category list');
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
