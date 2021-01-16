import Router from 'express';

import userController from '../controllers/userController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', loginRequired, userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.deleteOne);

export {router as userRoutes};