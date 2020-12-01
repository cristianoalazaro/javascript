function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} está ${assunto}`;
        },
        altura,
        peso,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Cristiano','Ap Lázaro',1.74,83);
const p2 = criaPessoa('Elenice','C Lázaro',1.58,58);

console.log(p1.fala('estudando'));
console.log(p1.imc());
console.log(p2.fala('lendo'));
console.log(p2.imc());