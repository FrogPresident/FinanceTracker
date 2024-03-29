"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionController = void 0;
const transactionRepository_1 = __importDefault(require("../repositories/transactionRepository"));
exports.transactionController = {
    async home(req, res) {
        try {
            const transactions = await transactionRepository_1.default.getAllTransactions();
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
    transactionCreateGet(req, res) {
        res.render('transactionCreate', { title: 'Create  Transacation' });
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
            const newTransaction = await transactionRepository_1.default.create(transactionData);
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
