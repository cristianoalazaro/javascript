function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));

function funcao(nome){
    return function(){
        return nome;
    }
}

const chamaFuncao = funcao('Cristiano');
const chamaFuncao2 = funcao('Cristiane');
console.dir(chamaFuncao2());