"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
exports.userController = {
    async user(req, res, next) {
        try {
            const users = await userRepository_1.default.getAllUsers();
            res.json(users);
        }
        catch (err) {
            next(err);
        }
    },
    async userSignUpGet(req, res) {
        res.render('userSignUp', {
            title: 'User Sign Up'
        });
    },
    async userSignUpPost(req, res) {
        try {
            const userData = req.body;
            console.log(userData);
            const newUser = await userRepository_1.default.create(userData);
            res.redirect('/sign-in');
        }
        catch (error) {
            res.status(400).send('User creation failed: ' + error.message);
        }
    },
    userDeleteGet(req, res) {
        res.send('User delete GET page');
    },
    userDeletePost(req, res) {
        res.send('User delete POST action');
    },
    async userSignInGet(req, res) {
        res.render('userSignIn', {
            title: 'Login'
        });
    },
    async userSignInPost(req, res) {
        try {
            const { username, password } = req.body;
            const user = await userRepository_1.default.findByUsername(username);
            if (!user || user.validatePassword(password)) {
                return res.status(401).send('Invalid username or password');
            }
            req.session.user = user;
            res.redirect('/api/home');
            console.log(req.session.user);
        }
        catch (error) {
            res.status(500).send('Internal Server Error');
        }
    },
};
exports.default = exports.userController;
