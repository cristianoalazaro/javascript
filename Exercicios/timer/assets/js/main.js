function relogio(){
    function getTimeFromSecond(segundos) {
        const date = new Date(segundos * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    
    let segundos = 0;
    let timer;
    
    function startClock() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = getTimeFromSecond(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', (event) => {
        const element = event.target;
    
        if (element.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startClock();
        }
    
        if (element.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    
        if (element.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });    
}

relogio();