const exibeData = () => {

}

function getDiaSemana(diaNumber) {
    switch (diaNumber) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
    }
}

const getMes = (mes) => {
    switch (mes) {
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
    }
}

const data = new Date();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemana(diaSemana);
const nomeMes = getMes(mes);
console.log(getDiaSemana(diaSemana));
//document.getElementById('data').innerHTML = `<h1>${diaSemanaTexto}, ${dia} de ${nomeMes} de ${ano}</h1>`

document.getElementById('data').innerHTML =`<h1>${data.toLocaleDateString('pt-Br',{dateStyle:'full'})}</h1`;