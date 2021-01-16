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

        await User.create({ name, lastname, email, password: passwordHash });
        return res.json({ 'Success': 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(400).json({ errors: error.errors });
    }
}

const show = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findOne({ "_id": ObjectId(id) });
        const { _id, name, lastname, email } = user;
        return res.json({ _id, name, lastname, email });

    } catch (error) {
        return res.json('errors: Usuário não encontrado');
    }
}

const update = async (req, res) => {
    try {
        const email = req.userEmail;

        if (req.body.email !== email) {
            await emailExist(req.body.email);
            if (errorList.length > 0) {
                res.status(400).json({errors: ['E-mail já existe']});
                return errorList.splice(0, errorList.length);
            }
        }

        const user = await User.findByIdAndUpdate({ "_id": ObjectId(req.userId) }, req.body);

        if (!user) return res.status(400).json('Usuário não encontrado');
        return res.json('Usuário alterado com sucesso')
    } catch (error) {
        return res.status(400).json({ errors: ['Erro ao alterar o usuário'] });
    }
}

const deleteOne = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete({ "_id": ObjectId(req.userId) });
        if (!user) return res.status(400).json('Usuário não encontrado');
        return res.json('Usuário excluido com sucesso');
    } catch (error) {
        return res.status(400).json({ errors: ['Erro ao excluir usuário'] });
    }
}

export default { index, store, show, update, deleteOne };