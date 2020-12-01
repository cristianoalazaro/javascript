const pontuacaoUsuario = 500;
const nivelPontuacao = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(nivelPontuacao,corPadrao);