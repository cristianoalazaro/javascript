import Aluno from '../models/Aluno';
import User from '../models/User';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({
          error: ['Aluno não encontrado'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(error => error.message),
      });
    }
  }

  async store(req, res) {
    try{
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(error=>error.message),
      });
    }
  }

  async update(req, res) {
    try{
      if(!req.params.id){
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno){
        return res.status(400).json({
          error:['Aluno não encontrado'],
        });
      }
      const alunoAlterado = await aluno.update(req.body);
      return res.json(alunoAlterado);
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(error=>error.message),
      });
    }
  }

  async delete(req, res) {
    try{
      if (!req.params.id){
        return res.status(400).json({
          errors:['ID não enviado'],
        });
      }

      const aluno = await Aluno.findByPk(req.params.id);
      if(!aluno){
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }

      await aluno.destroy();
      return res.json(`Aluno ${req.params.id} deletado com sucesso`);
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map(error=>error.message),
      })
    }
  }
}

export default new AlunoController();
