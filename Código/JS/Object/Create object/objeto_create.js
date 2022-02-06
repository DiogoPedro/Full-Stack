'use strict';

function book(x, y){
    var z = {nome: x, codigo: y};
    return z;
}

function read_book(book){
    console.log("O parametro eh do tipo: " + typeof book + "\n" + "Parametro com valor: " + book);
    console.log("Seus atributos sao: ")
    for(var x in book)
        console.log(x + ':' + book[x]);
    
    book.codigo = 0; 
    console.log(book); //nao consigo mostra nenhum valor;
}

var livro1 = book("Investimento", '94&20');
var livro2 = Object.create(livro1);
var z = 3;

console.log(delete z);
//read_book(livro2);