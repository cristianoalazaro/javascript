import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose';

import User from '../models/UserModel.js';
import {
    errorList, validateName, validateLastname, validateEmail,
    emailExist, validatePassword
} from '../validators/userValidator.js';

const ObjectId = mongoose.Types.ObjectId;

const index = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        return res.json(users);
    } catch {
        return res.json([]);
    }
}

const store = async (req, res) => {
    const { name, lastname, email, password } = req.body;
    try {
        validateName(name);
        validateLastname(lastname);
        validateEmail(email);
        validatePassword(password);
        await emailExist(email);

        if (errorList.length > 0) {
            res.status(400).json(errorList);
            return errorList.splice(0, errorList.length);
        }

        const salt = bcryptjs.genSaltSync();
        const passwordHash = bcryptjs.hashSync(password, salt);

        await User.create({name, lastname, email, password:passwordHash});
        return res.json({ 'Success': 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(400).json({ errors: error.errors });
    }
}

const show = async (req, res)=>{
    try{
        const id = req.params.id;

        const user = await User.findOne({"_id": ObjectId(id)});
        const {_id, name, lastname, email} = user;
        return res.json({_id, name, lastname, email});

    }catch(error){
        return res.json('errors: Usuário não encontrado');
    }
}

// const passwordIsValid = (password)=>{
//     const hash = User.fin
//     return bcryptjs.compare(pass, passwordHash);
// }

export default { index, store, show };