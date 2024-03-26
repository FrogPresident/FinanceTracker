"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionController = void 0;
const transactionRepository_1 = __importDefault(require("../repositories/transactionRepository"));
exports.transactionController = {
    transactionList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transactions = yield transactionRepository_1.default.getAllTransactions();
                res.json(transactions);
            }
            catch (err) {
                next(err);
            }
        });
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
