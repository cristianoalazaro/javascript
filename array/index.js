const alunos = ['Luis','Maria','Eduardo'];
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'João';
alunos.push('Cristiano');
alunos.unshift('Elenice');
alunos.pop();
delete alunos[2];

console.log(alunos);

console.log(alunos.length);
console.log(typeof(alunos));
console.log(alunos instanceof Array);