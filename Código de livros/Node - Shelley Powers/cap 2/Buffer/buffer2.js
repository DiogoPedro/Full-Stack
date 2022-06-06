'use strict'

let buffer = new Buffer.alloc(18, 'This is my example');
let json = JSON.stringify(buffer);

console.log(json);

/*
*Em alguns casos o uso do toString(), para converter pode gerar erro, evite!
*O erro ocorre na maneira que recebe o dado, ao inves de uma sequencia utf-8, podemos receber uma sequencia fragmentada, onde sao 2 bytes
*   para representar um simbolo, exemplo o simbolo do euro que é codificado em 3 octetos.
*/

let StringDecode = require('string_decoder').StringDecoder;
let decoder = new StringDecode('utf-8');

console.log(decoder.write(buffer));