//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)     //Nao realiza uma operacao quando os parametros nao estao satisfeito
imprimirSoma(1,5,9) //Recebe apenas os dois primeiros valores, ignorando todo o resto.

//funcao com retorno
function soma(a, b = -1){ //Funcao com ideal de construtor, caso nao recebe o segundo parametro atribuira '-1' para b;
    return a + b

}

console.log("Construtor")
console.log(soma(3)) //2
console.log(soma(Number("5"),2)) //7