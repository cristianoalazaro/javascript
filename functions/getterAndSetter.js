function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome=valor;
        }
    }
}

const p2 = criaProduto('Camiseta');
console.log(p2.nome);