const _velocidade = Symbol();
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    set velocidade(value){
        if(typeof value !== 'number') return;
        if(value <= 0 || value >= 100) return;
        this[_velocidade] = value;
    }
    get velocidade(){
        return this[_velocidade];
    }
    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    frear() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('fusca');

for(let i=0; i<=200; i++){
    c1.acelerar();
}

c1.velocidade = 2000;
console.log(c1.velocidade);