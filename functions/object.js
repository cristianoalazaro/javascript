const pessoa1 = new Object();
pessoa1.nome = 'Cristiano';
pessoa1.sobrenome = 'Ap Lázaro';
pessoa1.idade = 44;
pessoa1.falarNome = function(){
    return `${this.nome} está falando.`;
};
pessoa1.getAnoNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

// console.log(pessoa1.nome);
// console.log(pessoa1['sobrenome']);
// console.log(pessoa1['idade']);
// console.log(pessoa1.falarNome());
// console.log(pessoa1.getAnoNascimento());

for(let key in pessoa1){
    console.log(pessoa1[key]);
}