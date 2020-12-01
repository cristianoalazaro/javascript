const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/contato',(req,res)=>{
    res.send('Obrigado por entrar em contato com a gente.');
});

app.get('/form',(req,res)=>{
    res.send(`<form action="/form" method="POST">
        Nome: <input type="text" name="nome" />
        <button>Enviar</button>
    </form>`)
});

app.post('/form',(req,res)=>{
    res.send('recebi o formulário!');
})

app.listen(3000,()=>{
    console.log('Servidor carregado na porta 30000');
});