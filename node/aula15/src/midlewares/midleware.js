exports.midlewareGlobal = (req, res, next)=>{
    if(req.body.cliente){
        req.body.cliente = req.body.cliente.replace('Ap Lázaro','Não use Ap Lázaro');
    }
    console.log();
    console.log('Passei no midleware global');
    console.log();
    next();
}