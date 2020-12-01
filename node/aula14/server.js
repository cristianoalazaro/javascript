require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    //console.log('Conectado com sucesso ao mongoDB!');
    app.emit('Pronto')
})
.catch(e=>console.log(e));

const route = require('./routes');
const path = require('path');
const {midlewareGlobal} = require('./src/midlewares/midleware');

const { static } = require('express');

app.use(express.urlencoded({extended:true}));

app.use(static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Nossos próprios midlewares
app.use(midlewareGlobal);

app.use(route);

app.on('Pronto',()=>app.listen(3000,()=>{
    console.log('Servidor carregado na porta 30000');
}));
