const inputTarefa = document.querySelector('#input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const button = document.createElement('button');
    button.innerText='Apagar';
    button.setAttribute('class','apagar');
    li.appendChild(button);
}

inputTarefa.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput(){
    inputTarefa.value='';
    inputTarefa.focus();
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaTarefas.push(tarefaTexto);

    }

    const tarefasJson = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas',tarefasJson);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

function criaTarefa(tarefa) {
    const li = criaLi();
    li.innerText = tarefa;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click',(event)=>{
    const element = event.target;
    if(element.classList.contains('apagar')){
        element.parentElement.remove();
        salvarTarefas();
    }
})