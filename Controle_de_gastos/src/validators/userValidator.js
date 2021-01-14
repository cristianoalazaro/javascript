import validator from 'email-validator';

import User from '../models/UserModel.js';

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
    if (!validator.validate(email)) 
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
    const emailFinded = await User.findOne({ email }); console.log(emailFinded);
    if (emailFinded)
        return errorList.push('Esse e-mail já existe');
}

export { validateName, validateLastname, validateEmail, validatePassword, emailExist, errorList };