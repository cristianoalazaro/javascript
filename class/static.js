class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //métodos de instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
    //Métodos estáticos
    static trocaPilha(){
        console.log('Você trocou a pilha do controle');
    }
}

ControleRemoto.trocaPilha();
const controle1 = new ControleRemoto('Philips');
console.log(controle1);
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
controle1.diminuirVolume();
console.log(controle1);
