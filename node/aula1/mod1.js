class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

const nome = 'Cristiano';
const sobrenome = 'Ap Lázaro';

//exports.Pessoa = Pessoa;

module.exports = {nome, sobrenome, Pessoa};