"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionController = void 0;
const transactionRepository_1 = __importDefault(require("../repositories/transactionRepository"));
const categoryRepository_1 = __importDefault(require("../repositories/categoryRepository"));
exports.transactionController = {
    async home(req, res) {
        try {
            const userId = req.session.user?._id;
            const transactions = await transactionRepository_1.default.getAllTransactions(userId);
            res.render('home', { title: 'Transactions', transactions: transactions });
        }
        catch (error) {
            res.status(500).send("Error Create Home page" + error.message);
        }
    },
    async transactionList(req, res, next) {
        try {
            const transactions = await transactionRepository_1.default.getAllTransactions();
            res.json(transactions);
        }
        catch (err) {
            next(err);
        }
    },
    async transactionCreateGet(req, res) {
        try {
            const categories = await categoryRepository_1.default.getAllCategories();
            res.render('transactionCreate', { title: 'Create  Transacation', categories: categories });
            console.log(categories);
        }
        catch (error) {
            res.status(500).send('Error loading page: ' + error.message);
        }
    },
    async transactionCreatePost(req, res) {
        try {
            const { date, description, transactionType, amount } = req.body;
            const user = req.session.user;
            const transactionData = {
                date,
                description,
                transactionType,
                amount,
                user: user._id
            };
            // Create Transaction
            const newTransaction = await transactionRepository_1.default.create(transactionData);
            // Create Association between Transaction and Category
            res.redirect('/home');
        }
        catch (error) {
            res.status(500).send('Error creating transaction' + error.message);
        }
    },
    transactionDeleteGet(req, res) {
        res.send('Transaction delete GET page');
    },
    transactionDeletePost(req, res) {
        res.send('Transaction delete POST action');
    },
    transactionUpdateGet(req, res) {
        res.send('Transaction update GET page');
    },
    transactionUpdatePost(req, res) {
        res.send('Transaction update POST action');
    },
};
exports.default = exports.transactionController;
