import { Router } from 'express';
import transactionController from '../controllers/transactionController';
import categoryController from '../controllers/categoryController';
import userController from '../controllers/userController';

const router = Router();
// User Login
router.route('/sign-in')
    .get(userController.userSignInGet)
    .post(userController.userSignInPost);

router.route('/sign-up')
    .get(userController.userSignUpGet)
    .post(userController.userSignInPost);

    

// Transaction Routes
router.get('/transactions', transactionController.transactionList);

router.route('/transaction/create')
    .get(transactionController.transactionCreateGet)
    .post(transactionController.transactionCreatePost);

router.route('/transaction/:id/delete')
    .get(transactionController.transactionDeleteGet)
    .post(transactionController.transactionDeletePost);

router.route('/transaction/:id/update')
    .get(transactionController.transactionUpdateGet)
    .post(transactionController.transactionUpdatePost);


// Category Routes
router.get('/categories', categoryController.categoryList);

router.route('/category/create')
    .get(categoryController.categoryCreateGet)
    .post(categoryController.categoryCreatePost);

router.route('/category/:id/delete')
    .get(categoryController.categoryDeleteGet)
    .post(categoryController.categoryDeletePost);

router.route('/category/:id/update')
    .get(categoryController.categoryUpdateGet)
    .post(categoryController.categoryUpdatePost);


export default router;
