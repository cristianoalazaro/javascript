const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const num2 = numeros.filter(item=>item>10);
console.log(num2);

const pessoas = [
    {nome: 'Cristiano' ,idade: 44},
    {nome: 'Elenice' ,idade: 42},
    {nome: 'Cristiane' ,idade: 15},
    {nome: 'Bruno' ,idade: 10},
    {nome: 'Mel' ,idade: 2},
    {nome: 'Ding' ,idade: 1}
];

const filteredPeople = pessoas.filter(item=>item.nome.length>=5);
const nomesTerminamComA = pessoas.filter(item=>item.nome.toLowerCase().endsWith('o'));
console.log(filteredPeople);
console.log(nomesTerminamComA);