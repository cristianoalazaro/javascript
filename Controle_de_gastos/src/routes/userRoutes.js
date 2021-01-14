import Router from 'express';

import userController from '../controllers/userController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/:id', loginRequired, userController.show);
router.post('/', userController.store);

export {router as userRoutes};