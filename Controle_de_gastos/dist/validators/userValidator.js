"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _emailvalidator = require('email-validator'); var _emailvalidator2 = _interopRequireDefault(_emailvalidator);

var _UserModeljs = require('../models/UserModel.js'); var _UserModeljs2 = _interopRequireDefault(_UserModeljs);

let errorList = [];

const validateName = (name) => {
    name = name.trim();
    if (!name)
        return errorList.push('Nome não pode ser vazio');
    if (name.length < 3 || name.length > 50)
        return errorList.push('Nome deve ter entre 3 e 50 caracteres');
}

const validateLastname = (lastname) => {
    lastname = lastname.trim();
    if (!lastname)
        return errorList.push('Sobrenome não pode ser vazio');
    if (lastname.length < 3 || lastname.length > 100)
        return errorList.push('Sobrenome deve ter entre 3 e 100 caracteres');
}

const validateEmail = (email) => {
    email = email.trim();
    if (!email)
        return errorList.push('E-mail não pode ser vazio');
    if (!_emailvalidator2.default.validate(email)) 
        return errorList.push('E-mail inválido');
}

const validatePassword = (password) => {
    password = password.trim();

    if (!password)
        return errorList.push('Senha não pode ser vazia');
    if (password.length < 6 || password.length > 100)
        return errorList.push('Senha deve ter entre 6 e 100 caracteres');
}

const emailExist = async (email) => {
    email = email.trim();
    const emailFinded = await _UserModeljs2.default.findOne({ email }); console.log(emailFinded);
    if (emailFinded)
        return errorList.push('Esse e-mail já existe');
}

exports.validateName = validateName; exports.validateLastname = validateLastname; exports.validateEmail = validateEmail; exports.validatePassword = validatePassword; exports.emailExist = emailExist; exports.errorList = errorList;