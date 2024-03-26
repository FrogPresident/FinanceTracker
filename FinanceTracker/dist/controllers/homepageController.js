"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionCreatePost = exports.transactionCreateGet = exports.index = void 0;
function index(req, res) {
    res.send('Welcome to the Homepage!');
}
exports.index = index;
function transactionCreateGet(req, res) {
    res.send('Transaction create GET');
}
exports.transactionCreateGet = transactionCreateGet;
function transactionCreatePost(req, res) {
    res.send('Transaction create POST');
}
exports.transactionCreatePost = transactionCreatePost;
