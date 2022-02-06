let a = 1;
var b = 2;
let c = 3;

console.log("Valor de a antes de entrar no if->",a);
console.log("Valor de b antes de entrar no if->",b);

if(a){
    let a = 3; var b = 5;   c = 10;
    console.log("Valor de a, dentro do if->",a);
    console.log("Valor de b, dentro do if->",b);
}

console.log("Valor final de a ->",a);
console.log("Valor final de b ->",b);
console.log("Valor final de b ->",c);


/*Let no fundo eh uma variável local, que assume valores naquele Bloco, enquanto var é considerado uma variável
global, para let assumir um valor em Bloco apenas naquele Bloco, é necessario então que seja redeclarado 
naquele bloco.   */

// Let scop de variavel global, funcao, bloco;
// Var scop de variavel global, funcao mas ñ de bloco;