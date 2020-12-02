const Login = require('../models/LoginModel');
const { index } = require("./homeController");

exports.index = (req,res)=>{
    res.render('login');
};

exports.register = (req,res)=>{
    const login = new Login(req.body);
    res.send(login.body);
};
