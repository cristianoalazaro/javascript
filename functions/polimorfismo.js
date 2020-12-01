//superclasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = Number(saldo);
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log('Saldo insuficiente');
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag.: ${this.agencia} C.: ${this.conta} Saldo: R$ ${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(value){
    if (value > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)} `);
        return;
    }
    this.saldo -= value;
    this.verSaldo();
}

function ContaPoupanca(agencia,conta,saldo){
    Conta.call(this,agencia,conta,saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

cc = new ContaCorrente('123','123456',100,100);
cp = new ContaPoupanca('123','456789',100);
cc.sacar(150);
cp.sacar(101);