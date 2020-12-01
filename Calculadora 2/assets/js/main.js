function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.clickButtons();
        this.pressEnter();
    };

    this.pressEnter = () => {
        document.addEventListener('keyup', event => {
            if (event.key !== 'Enter') return;
            this.realizaConta();
        });
    };

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida!');
                return;
            }
            this.display.value = conta;
        }catch(e){
            alert('Conta inválida!');
            return;
        }
    };

    this.clickButtons = ()=>{
        document.addEventListener('click',(event)=>{
            const element = event.target;
            this.display.focus();

            if(element.classList.contains('btn-num')){
                this.btnToDisplay(element.innerText);
            };
            
            if(element.classList.contains('btn-clear')){
                this.clearDisplay();
            };

            if (element.classList.contains('btn-del')){
                this.deleteOne();
            };

            if(element.classList.contains('btn-eq')){
                this.realizaConta();
            };
        });
    };

    this.btnToDisplay = (valor)=>{
        this.display.value += valor;
    }
};

const calc = new Calculadora();
calc.inicia();