import  Router  from 'express';
import userController from '../controllers/UserController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

//Não everiam existir essas 2 rotas abaixo
//router.get('/', userController.index); //lista todos os usuários
//router.get('/:id', userController.show); // lista um usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
  FUNÇÕES PADRÃO DO CRUD NO CONTROLLER
  index -> lista todos os usuários -> GET
  store/create -> cria um novo usuário -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuário -> PUT/PATCH
*/
