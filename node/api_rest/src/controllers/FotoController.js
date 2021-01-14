import multer from 'multer';

import multerConfig from '../config/multer.js';
import Foto from '../models/Foto.js';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res){
    return upload(req,res, async (err)=>{
      if (err){
        res.status(400).json({
          errors:[err.code],
        });
      }
      try{
        const {originalname, filename} = req.file;
        const {aluno_id} = req.body;
        const foto = await Foto.create({originalname, filename, aluno_id});
        return res.json(foto);
      }catch(e){
        return res.status(400).json({
          errros: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FotoController();
