/*
Em relação a javaScript existe algumas formas de se identificar um NaN durante a execução do programa;


*/

let x = 0/0; //NaN
let y = 1/0; //Infinity

//forma Errada:
if(x == NaN){
    console.log(x == NaN, funcionou");
}

//forma Correta:
if(x != x){
    console.log("x != NaN, funcionou");
}

//Usando uma função
if(isNaN(x)){ //Retorna-ra true para qualquer valor não numérico;
    console.log("A função funcionou");
}

