import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

import {userRoutes} from './routes/userRoutes.js';
import {tokenRoutes} from './routes/tokenRoutes.js';

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

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/users/', userRoutes);
app.use('/token/', tokenRoutes);

const port = process.env.PORT || 8080;

app.on('Pronto',()=>app.listen(port,()=>{
    console.log(`Servidor carregado na porta ${port}`);
}));
