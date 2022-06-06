var ssRe = /^\d{3}-\d{2}-\d{4}$/;
ssRe.test('555-55-5555');
ssRe.test('555-55-5555');
var ssRe = /^\d{3}-\d{2}-\d{5}$/;
ssRe.test('555-55-55555');

//para salver um arquivo no REPL digite .save nome.js, ou outro caminho que deseja ser salvo
//para sair use o .exit, e temos vários comandos nos REPL para serem usados.
//no REPL podemos também incorpar modulos, e muito mais, uma vez que executamos codigo de mais de uma linha, precisamos
//sinalizar seja com chaves {} ou com parenteses ().