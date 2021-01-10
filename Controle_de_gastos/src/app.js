import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

import {userRoutes} from './routes/userRoutes.js';

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(()=>{
    console.log('Conectado com sucesso ao mongoDB');
    app.emit('Pronto');
}).catch(e=>console.log(e));

const app = express();

app.use(express.json());
app.use('/users/', userRoutes);

const port = process.env.PORT || 8080;

app.on('Pronto',()=>app.listen(port,()=>{
    console.log(`Servidor carregado na porta ${port}`);
}));
