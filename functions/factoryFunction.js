function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${nome} ${sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Cristiano','Ap Lázaro');
console.log(p1.nomeCompleto());