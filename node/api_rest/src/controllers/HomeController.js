import Aluno from '../models/Aluno';

class HomeController{
  async index(req, res){
    const novoAluno = await Aluno.create({
      nome: 'Cristiano',
      sobrenome: 'Aparecido Lázaro',
      email: 'cristianoalazaro@hotmail.com',
      idade: 44,
      peso: 83,
      altura: 1.74,
    })
    res.json(novoAluno);
  }
};

export default new HomeController();
