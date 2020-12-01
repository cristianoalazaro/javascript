const frutas = ['banana','maçã', 'pêra', 'mamão', 'laranja'];

for (let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Cristiano',
    sobrenome: 'Ap Lázaro',
    idade: 44,
    endereco:{
        rua:'123',
        cidade:'Rib Claro'
    }
};

const {endereco} = pessoa;

for(let i in endereco){
    console.log(endereco);
}

console.log(pessoa['endereco']);