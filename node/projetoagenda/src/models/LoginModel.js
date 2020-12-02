const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const LoginModel = mongoose.model('login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
    }
}

module.exports = Login;