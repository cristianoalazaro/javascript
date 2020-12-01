console.log('Cristiano' && NaN && 'Elenice');

function falaOi() {
    return 'oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi());
console.log(false || 0 || 'Cristiano');

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);