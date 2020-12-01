function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Cristiano','Aparecido Lázaro');
const p2 = new Pessoa('Elenice','Cardoso Lázaro');
console.log(p1);
console.log(p2);