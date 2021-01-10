import Router from 'express';

import userController from '../controllers/userController.js';

const router = new Router();

router.get('/', userController.index);
router.post('/', userController.store);

export {router as userRoutes};