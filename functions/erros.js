// try{
//     console.log(naoExisto);
// }catch(error){
//     console.log('Deu erro');
// }

function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x ou y não são números');
    }
    return x+y;
}

try{
    console.log(soma(1,2));
    console.log(soma(1,'2'));
}catch(e){
    console.log('Erro escondido do usuário');
}