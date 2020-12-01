function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(typeof msg !=='string'){
                reject('Cai no erro');
                return;
            }
            resolve(msg.toUpperCase()+' Passei na promise');
            return;
        }, tempo);    
    })
}

// esperaAi('Frase 1', rand(1, 3), ()=>{
//     esperaAi('Frase 2', rand(1, 3), ()=> {
//         esperaAi('Frase 3', rand(1, 3));
//     });
// });

async function executa(){
    const fase1 = await esperaAi('Fase 1',rand());
    console.log(fase1);
    const fase2 = await esperaAi('Fase 2',rand());
    console.log(fase2);
    const fase3 = await esperaAi('Fase 3',rand());
    console.log(fase3);
    console.log('Terminamos na fase 3');
}

executa();