import User from '../models/User.js';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const {id, nome, email} = novoUser;
      return res.json({id, nome, email});
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(error=>error.message)
      });
    }
  };

  async index(req, res){
    try{
      const users = await User.findAll({attributes:['id','nome','email']});
      return res.json(users);
    }catch(e){
      return res.json(null);
    }
  };

  async show(req, res){
    try{
      const user = await User.findByPk(req.params.id);

      const {id, nome, email} = user;
      return res.json({id, nome, email});
    }catch(e){
      return res.json(null);
    }
  };

  async update(req, res){
    try{
      const user = await User.findByPk(req.userId);

      if(!user){
        return res.status(400).json({
          errors:['Usuário não existe'],
        });
      }
      const usuarioAlterado = await user.update(req.body);
      const {id, nome, email} = usuarioAlterado;
      return res.json({id, nome, email});
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(error=>error.message),
      });
    }
  };

  async delete(req, res){
    try{

      const user = await User.findByPk(req.userId);

      if(!user){
        return res.status(400).json({
          errors:['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(`usuário ${req.userId} deletado com sucesso!`)
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(error=>error.message),
      });
    }
  };
};

export default new UserController();
