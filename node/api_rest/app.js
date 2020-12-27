import dotenv from 'dotenv';
import {resolve} from 'path';

dotenv.config();

import './src/database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import delay from 'express-delay';

import userRoutes from './src/routes/userRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

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
    this.app.use(delay(1000));
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
