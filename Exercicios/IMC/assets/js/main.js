function calculaImc(event) {
    event.preventDefault();
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = (peso / (altura * altura)).toFixed(2);
    let text = null; 
    if(imc <18.5){
        text = 'Abaixo do peso';
    }else if(imc >= 18.5 && imc <= 24.9){
        text = 'Peso normal';
    }else if(imc >= 25 && imc <= 29.9){
        text = 'Sobrepeso';
    }else if(imc >= 30 && imc <= 34.9){
        text = 'Obesidade grau 1';
    }else if(imc >= 35 && imc <= 39.9){
        text = 'Obesidade grau 2';
    } else{
        text = 'Obesidade grau 3';
    }
    document.getElementById('result').innerHTML =`<p>Seu IMC é ${imc}. (${text})</p>` ;

}