// (function(){
//     console.log('Exemplo de função imediata');
// })();

(function(){
    const sobrenome = 'Ap Lázaro';
    function criaNome(nome){
        return nome+' '+sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Cristiano'))
    }
    falaNome();
})();