"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactionController_1 = __importDefault(require("../controllers/transactionController"));
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
const userController_1 = __importDefault(require("../controllers/userController"));
const router = (0, express_1.Router)();
// User Catalog(need permission)
router.route('/user')
    .get(userController_1.default.user);
// User Login
router.route('/sign-in')
    .get(userController_1.default.userSignInGet)
    .post(userController_1.default.userSignInPost);
router.route('/sign-up')
    .get(userController_1.default.userSignUpGet)
    .post(userController_1.default.userSignUpPost);
// Home Page
router.get('/home', transactionController_1.default.home);
// Transaction Routes
router.get('/transaction', transactionController_1.default.transactionList);
router.route('/transaction/create')
    .get(transactionController_1.default.transactionCreateGet)
    .post(transactionController_1.default.transactionCreatePost);
router.route('/transaction/:id/delete')
    .get(transactionController_1.default.transactionDeleteGet)
    .post(transactionController_1.default.transactionDeletePost);
router.route('/transaction/:id/update')
    .get(transactionController_1.default.transactionUpdateGet)
    .post(transactionController_1.default.transactionUpdatePost);
// Category Routes
router.get('/category', categoryController_1.default.categoryList);
router.route('/category/create')
    .get(categoryController_1.default.categoryCreateGet)
    .post(categoryController_1.default.categoryCreatePost);
router.route('/category/:id/delete')
    .get(categoryController_1.default.categoryDeleteGet)
    .post(categoryController_1.default.categoryDeletePost);
router.route('/category/:id/update')
    .get(categoryController_1.default.categoryUpdateGet)
    .post(categoryController_1.default.categoryUpdatePost);
exports.default = router;
