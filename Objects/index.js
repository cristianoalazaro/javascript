const pessoa1 = {
    nome: 'Cristiano',
    sobrenome: 'Ap Lázaro',
    idade: 44,

    fala() {
        console.log('Olá mundo!');
    }
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

    }
};

console.log(criaPessoa('Elenice', 'Cardoso Lázaro', 42));
pessoa1.fala();
