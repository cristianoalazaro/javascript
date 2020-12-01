// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce((acc, cur, ind) => {
//     return acc + cur;
// }, 0);

// console.log(total);

// const pares = numeros.reduce((acc, curr, ind) => {
//     if (curr % 2 === 0) acc.push(curr);
//     return acc;
// }, []);

// console.log(pares);

// const impares = numeros.reduce((acc, curr, ind) => {
//     if (curr % 2 !== 0) acc.push(curr);
//     return acc;
// }, []);

// console.log(impares);

// const dobro = numeros.reduce((acc, cur) => {
//     acc.push(cur * 2);
//     return acc;
// }, []);

// console.log(dobro);

const pessoas = [
    { nome: 'Cristiano', idade: 44 },
    { nome: 'Elenice', idade: 42 },
    { nome: 'Cristiane', idade: 15 },
    { nome: 'Bruno', idade: 10 },
    { nome: 'Mel', idade: 2 },
    { nome: 'Ding', idade: 1 }
];

const maisVelha = pessoas.reduce((acc,cur)=>{
    if(acc.idade > cur.idade) return acc;
    return cur;
})
console.log(maisVelha);