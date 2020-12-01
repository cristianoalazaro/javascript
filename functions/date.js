const data = new Date(2019,01,29, 12,15, 27);
const data2 = new Date('2020-08-02 12:00:37');
console.log(data.toString());
console.log(data2.toString());
console.log('Dia',data2.getDate());
console.log('Mês',data2.getMonth());
console.log('Ano',data2.getFullYear());
console.log('Hora',data2.getHours());
console.log('Minuto',data2.getMinutes());
console.log('Segundo',data2.getSeconds());
console.log('Milisegundo',data2.getMilliseconds());
console.log('Dia semana',data2.getDay());
console.log('Milésimos de segundos do marco 0',Date.now());

function zeroAEsquerda(num){
    return num>=10 ? num : `0${num}`;
}

function formataDate(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`;
}

const data3 = new Date();
const dataBrasil = formataDate(data3);
console.log(dataBrasil);