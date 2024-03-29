import { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import UserRepository from '../repositories/userRepository';

declare module 'express-session' {
    interface SessionData {
        user?: any;
    }
}
export const userController = {
    async user(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await UserRepository.getAllUsers();
            res.json(users)
        } catch (err) {
            next(err);
        }
    },
    async userSignUpGet(req: Request, res: Response) {
        res.render('userSignUp', {
            title: 'User Sign Up'
        });
    },
    async userSignUpPost(req: Request, res: Response) {
        try {
            const userData = req.body;
            console.log(userData);
            const newUser = await UserRepository.create(userData);
            res.redirect('/sign-in')
        } catch (error: any) {
            res.status(400).send('User creation failed: ' + error.message);
        }
    },
    userDeleteGet(req: Request, res: Response) {
        res.send('User delete GET page');
    },
    userDeletePost(req: Request, res: Response) {
        res.send('User delete POST action');
    },
    async userSignInGet(req: Request, res: Response) {
        res.render('userSignIn', {
            title: 'Login'
        })
    },
    async userSignInPost(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            const user = await UserRepository.findByUsername(username);
            if (!user || user.validatePassword(password)) {
                return res.status(401).send('Invalid username or password');
            }
            req.session.user = user;
            res.redirect('/home');
            console.log(req.session.user);
        } catch (error: any) {
            res.status(500).send('Internal Server Error');
        }
    },
};

export default userController;