import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/UserModel.js';

const store = async (req,res)=>{
    const {email = '', password = ''} = req.body;
    if (!email || !password) return res.status(401).json({'errors': ['Credenciais inválidas']})
    const user = await User.findOne({email});
    if (!user) return res.status(401).json({errors:['Usuário não existe'],});

    const hash = await bcryptjs.compare(password, user.password);
    if (!hash) return res.status(401).json({errors: ['Senha inválida']});

    const {id} = user;

    const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {expiresIn:process.env.TOKEN_EXPIRATION});
    res.json({token});

}

export default {store};