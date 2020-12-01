const pessoas = [
    {id:3, nome:'Cristiano'},
    {id:2, nome:'Elenice'},
    {id:1, nome:'Bruno'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map()
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id,{...pessoa});
}

console.log(novasPessoas);