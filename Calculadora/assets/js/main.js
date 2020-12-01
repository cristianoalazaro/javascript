function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        
        inicia(){
            this.clickButtons();
            this.pressEnter();
        },

        pressEnter(){
            document.addEventListener('keyup',(event)=>{
                if(event.key === 'Enter'){
                    this.realizaConta();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0,-1);
        },

        realizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida!');
                    return;
                }
                console.log(conta);
                this.display.value = conta;
            } catch(e){
                alert('Conta inválida!');
            }
        },


        clickButtons(){
            //this -> calculadora
            document.addEventListener('click',(event)=>{
                const element = event.target;

                if(element.classList.contains('btn-num')){
                    this.btnParaDisplay(element.innerText);
                }

                if(element.classList.contains('btn-clear')){
                    console.log('clear');
                    this.clearDisplay();
                }

                if (element.classList.contains('btn-del')){
                    this.deleteOne();
                }

                if(element.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();