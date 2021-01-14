import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nome não pode ser vazio'],
        trim: true,
        minlength: [3, 'Nome deve ter entre 3 e 50 caracteres'],
        maxlength: [50, 'Nome deve ter entre 3 e 50 caracteres'],
    },
    lastname: {
        type: String,
        required: [true, 'Sobrenome não pode ser vazio'],
        trim: true,
        minlength: [3, 'Sobrenome deve ter entre 3 e 100 caracteres'],
        maxlength: [100, 'Sobrenome deve ter entre 3 e 100 caracteres'],
    },
    email: {
        type: String,
        required: [true, 'E-mail não pode ser vazio'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Senha não pode ser vazio'],
        trim: true,
        minlength: [6, 'Senha deve ter entre 6 e 50 caracteres'],
        maxlength: [100, 'Senha deve ter entre 6 e 100 caracteres'],
    }
});

const User = mongoose.model('user',userSchema);

export default User;