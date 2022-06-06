var os = require('os');

console.log('Using end of line' + os.EOL + 'to insert a new line');
console.log(os.endianness());
console.log(os.tmpdir());
console.log(os.homedir());

console.log('--------------');

console.log('Informa a qnt de memoria disponivel no sistema: ' + os.freemem() + ' bytes');
console.log('Informa a qnt de memoria total do sistema: ' +os.totalmem() + ' bytes');
console.log('Traz as informacoes sobre o processador: ', os.cpus()[0]);