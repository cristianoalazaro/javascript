"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

_dotenv2.default.config();

var _userRoutesjs = require('./routes/userRoutes.js');
var _tokenRoutesjs = require('./routes/tokenRoutes.js');

_mongoose2.default.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(()=>{
    console.log('Conectado com sucesso ao mongoDB');
    app.emit('Pronto');
}).catch(e=>console.log(e));

const app = _express2.default.call(void 0, );

app.use(_cors2.default.call(void 0, ));
app.use(_helmet2.default.call(void 0, ));
app.use(_express2.default.json());
app.get('/', (req, res)=> res.json('ok'));
app.use('/users/', _userRoutesjs.userRoutes);
app.use('/token/', _tokenRoutesjs.tokenRoutes);

const port = process.env.PORT || 8080;

app.on('Pronto',()=>app.listen(port,()=>{
    console.log(`Servidor carregado na porta ${port}`);
}));
