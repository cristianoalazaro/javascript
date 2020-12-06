import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from 'express';
import userRoutes from './src/routes/userRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

class App{
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.urlencoded({extended:true}));
    this.app.use(express.json());
  }

  routes(){
    this.app.use('/users/',userRoutes);
    this.app.use('/tokens/',tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
};

export default new App().app;
