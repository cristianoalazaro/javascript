exports.midlewareGlobal = (req, res, next)=>{
    res.locals.umaVariavelLocal = 'Este é o valor da variável local';
    next();
};

exports.outroMidleware = (req,res,next)=>{
    next();
};