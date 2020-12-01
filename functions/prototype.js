function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = ()=> this.nome+' '+this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome+' '+this.sobrenome;
}

const p1 = new Pessoa('Cristiano','Ap Lázaro');
const p2 = new Pessoa('Elenice','C Lázaro');

console.log(p1);
console.log(p2.nomeCompleto());