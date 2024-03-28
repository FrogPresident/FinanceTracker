"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionController = void 0;
const transactionRepository_1 = __importDefault(require("../repositories/transactionRepository"));
exports.transactionController = {
    homepage(req, res) {
        res.send('home page');
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
        res.render('transactionCreate', {
            title: 'Create Transaction'
        });
    },
    transactionCreatePost(req, res) {
        res.send('Transaction create POST page');
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
