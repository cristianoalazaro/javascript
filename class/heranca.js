class dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado) return;
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado) return;
        this.ligado = false;
    }
}

class Smatphone extends dispositivo{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends dispositivo{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
    ligar(){
        console.log('Você ligou o tablet');
    }
}

const s1 = new Smatphone('Samsung','Preto','S10');
s1.ligar();
console.log(s1);

const lg1 = new Tablet('LG','sim');
console.log(lg1);
lg1.ligar();