import dotenv from 'dotenv';
//const dotenv = require('dotenv');
import {resolve} from 'path';
//const {resolve} = require('path');

dotenv.config();

import './src/database/index.js';
//require('./src/database');

import express from 'express';
//const express = require('express');
 import cors from 'cors';
//const cors = require('cors');
 import helmet from 'helmet';
//const helmet = require('helmet');
//import delay from 'express-delay';

 import userRoutes from './src/routes/userRoutes.js';
//const userRoutes = require('./src/routes/userRoutes');
 import alunoRoutes from './src/routes/alunoRoutes.js';
//const alunosRoutes = require('./src/routes/alunoRoutes');
 import tokenRoutes from './src/routes/tokenRoutes.js';
//const tokenRoutes = require('./src/routes/tokenRoutes');
 import fotoRoutes from './src/routes/fotoRoutes.js';
//const fotoRoutes = require('./src/routes/fotoRoutes');

/* Poderia ser assim
const whiteList = [
  'http://www.algumacoisa.com.br',
  'localhost:3000'
];

const corsOptions = {
  origin: function (origin, callback){
    if(whiteList.indexOf(origin) !== -1){
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}
*/

class App{
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(helmet());
    //this.app.use(delay(1000));
    this.app.use(express.urlencoded({extended:true}));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname,'uploads')));
  }

  routes(){
    //this.app.use(cors(corsOptions)); Poderia ser assim
    this.app.use('/users/',userRoutes);
    this.app.use('/tokens/',tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
};

export default new App().app;
