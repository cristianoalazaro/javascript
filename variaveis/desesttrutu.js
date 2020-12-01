const pessoa = {
    nome: 'Cristiano',
    sobrenome: 'Ap Lázaro',
    idade: 44,
    endereco: {
        rua:'João Gabriel',
        numero: 637
    }
};

// console.log(pessoa);
// console.log(pessoa.nome);
// const {sobrenome} = pessoa;
// console.log(sobrenome);
// const {idade:i} = pessoa;
// console.log(i);
// const {endereco} = pessoa;
// console.log(endereco);
// const {endereco:{rua,numero}} = pessoa;
// console.log(rua, numero);
const {endereco:{rua,numero}} = pessoa;
console.log(rua);