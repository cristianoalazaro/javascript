"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _UserModeljs = require('../models/UserModel.js'); var _UserModeljs2 = _interopRequireDefault(_UserModeljs);



var _userValidatorjs = require('../validators/userValidator.js');

const ObjectId = _mongoose2.default.Types.ObjectId;

const index = async (req, res) => {
    try {
        const users = await _UserModeljs2.default.find({}, { password: 0 });
        return res.json(users);
    } catch (e) {
        return res.json([]);
    }
}

const store = async (req, res) => {
    const { name, lastname, email, password } = req.body;
    try {
        _userValidatorjs.validateName.call(void 0, name);
        _userValidatorjs.validateLastname.call(void 0, lastname);
        _userValidatorjs.validateEmail.call(void 0, email);
        _userValidatorjs.validatePassword.call(void 0, password);
        await _userValidatorjs.emailExist.call(void 0, email);

        if (_userValidatorjs.errorList.length > 0) {
            res.status(400).json(_userValidatorjs.errorList);
            return _userValidatorjs.errorList.splice(0, _userValidatorjs.errorList.length);
        }

        const salt = _bcryptjs2.default.genSaltSync();
        const passwordHash = _bcryptjs2.default.hashSync(password, salt);

        await _UserModeljs2.default.create({ name, lastname, email, password: passwordHash });
        return res.json({ 'Success': 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(400).json({ errors: error.errors });
    }
}

const show = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await _UserModeljs2.default.findOne({ "_id": ObjectId(id) });
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
            await _userValidatorjs.emailExist.call(void 0, req.body.email);
            if (_userValidatorjs.errorList.length > 0) {
                res.status(400).json({errors: ['E-mail já existe']});
                return _userValidatorjs.errorList.splice(0, _userValidatorjs.errorList.length);
            }
        }

        const user = await _UserModeljs2.default.findByIdAndUpdate({ "_id": ObjectId(req.userId) }, req.body);

        if (!user) return res.status(400).json('Usuário não encontrado');
        return res.json('Usuário alterado com sucesso')
    } catch (error) {
        return res.status(400).json({ errors: ['Erro ao alterar o usuário'] });
    }
}

const deleteOne = async (req, res) => {
    try {
        const user = await _UserModeljs2.default.findByIdAndDelete({ "_id": ObjectId(req.userId) });
        if (!user) return res.status(400).json('Usuário não encontrado');
        return res.json('Usuário excluido com sucesso');
    } catch (error) {
        return res.status(400).json({ errors: ['Erro ao excluir usuário'] });
    }
}

exports. default = { index, store, show, update, deleteOne };