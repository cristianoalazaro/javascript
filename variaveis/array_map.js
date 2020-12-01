const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

console.log(numeros);

const dobro = numeros.map(item => item * 2);

console.log(dobro);

const pessoas = [
    { nome: 'Cristiano', idade: 44 },
    { nome: 'Elenice', idade: 42 },
    { nome: 'Cristiane', idade: 15 },
    { nome: 'Bruno', idade: 10 },
    { nome: 'Mel', idade: 2 },
    { nome: 'Ding', idade: 1 }
];

console.log(pessoas);

const nomes = pessoas.map(item => item.nome);
const idades = pessoas.map(item => ({ idade: item.idade }));
const ids = pessoas.map((item,index)=>{
    item.id = index+1;
    return item;
});

console.log(nomes);
console.log(idades);
console.log(ids);