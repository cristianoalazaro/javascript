"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _UserModeljs = require('../models/UserModel.js'); var _UserModeljs2 = _interopRequireDefault(_UserModeljs);

const store = async (req,res)=>{
    const {email = '', password = ''} = req.body;
    if (!email || !password) return res.status(401).json({'errors': ['Credenciais inválidas']})
    const user = await _UserModeljs2.default.findOne({email});
    if (!user) return res.status(401).json({errors:['Usuário não existe'],});

    const hash = await _bcryptjs2.default.compare(password, user.password);
    if (!hash) return res.status(401).json({errors: ['Senha inválida']});

    const {id} = user;

    const token = _jsonwebtoken2.default.sign({id, email}, process.env.TOKEN_SECRET, {expiresIn:process.env.TOKEN_EXPIRATION});
    res.json({token});

}

exports. default = {store};