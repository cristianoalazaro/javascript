const path = require('path');

const multiplica = require('./mod');

console.log(multiplica(10,20));

console.log(__filename);
console.log(__dirname);

console.log(path.resolve(__dirname));