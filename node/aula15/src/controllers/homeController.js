exports.paginaInicial = (req, res) => {
    //console.log(req.flash('info'), req.flash('error'), req.flash('success'));
    // req.flash('info', 'Olá mundo!');
    // req.flash('error', 'Algo deu errado!');
    // req.flash('success', 'Oba, deu certo!');
    //console.log(req.session.usuario);
    //req.session.usuario = {nome: 'Cristiano', logado: true};
    res.render('index');
    return;
};

exports.trataPost = (req,res)=>{
    res.send(req.body.cliente);
}