"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
exports.categoryController = {
    categoryList(req, res) {
        res.send('Category list');
    },
    categoryCreateGet(req, res) {
        res.send('Category create GET page');
    },
    categoryCreatePost(req, res) {
        res.send('Category create POST action');
    },
    categoryDeleteGet(req, res) {
        res.send('Category delete GET page');
    },
    categoryDeletePost(req, res) {
        res.send('Category delete POST action');
    },
    categoryUpdateGet(req, res) {
        res.send('Category update GET page');
    },
    categoryUpdatePost(req, res) {
        res.send('Category update POST action');
    },
};
exports.default = exports.categoryController;
