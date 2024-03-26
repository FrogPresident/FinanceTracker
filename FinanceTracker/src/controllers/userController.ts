import { Request, Response, NextFunction } from 'express';
import userRepository from '../repositories/userRepository';

export const userController = {
    async user(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await userRepository.getAllUsers();
            res.json(users)
        } catch (err) {
            next(err);
        }
    },
    userSignUpGet(req: Request, res: Response) {
        res.send('User create page');
    },
    userSignUpPost(req: Request, res: Response) {
        res.send('User create POST action');
    },
    userDeleteGet(req: Request, res: Response) {
        res.send('User delete GET page');
    },
    userDeletePost(req: Request, res: Response) {
        res.send('User delete POST action');
    },
    userSignInGet(req: Request, res: Response) {
        res.send('Sign in Page');
    },
    userSignInPost(req: Request, res: Response) {
        res.send('Sign in POST action');
    },
};

export default userController;