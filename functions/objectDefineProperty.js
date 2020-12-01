function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this,'estoque',{
        enumerable:true, //mostra a chave
        value:estoque, //valor
        writable:false,//pode ou não alterar o valor
        configurable:true //pode ou não reconfigurar a chave
    })
};

const p1 = new Produto('Camiseta',20,3);
console.log(p1);