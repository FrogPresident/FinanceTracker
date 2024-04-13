import { Router } from 'express';
import transactionController from '../controllers/transactionController';
import categoryController from '../controllers/categoryController';
import userController from '../controllers/userController';

const router = Router();
// User Catalog(need permission)
router.route('/user')
    .get(userController.user)

// User Login
router.route('/sign-in')
    .get(userController.userSignInGet)
    .post(userController.userSignInPost);

router.route('/sign-up')
    .get(userController.userSignUpGet)
    .post(userController.userSignUpPost);
// Home Page
router.get('/home',transactionController.home)

// Transaction Routes
router.get('/transaction', transactionController.transactionList);

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

router.route('/category')
    .post(categoryController.categoryCreate);

router.route('/category/:id')
    .put(categoryController.categoryUpdate)
    .delete(categoryController.categoryDelete);


export default router;
