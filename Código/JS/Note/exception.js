/*
*   Para trata de uma exceção é usado a instrução " throw expression ; ", onde a expressão pode ser avaliada com um valor
*   de qualquer tipo. Pode-se lançar um número representando um código de erro ou uma string contendo uma mensagem de erro 
*   legível para seres humanos. 
*   Existe uma classe Error, usada para executar alguns erros já definida pela linguagem JavaScript.
*   Quando uma exceção ocorre, o código passa para uma rotina de tratamento, que busca o tratamento da exceção.
*   As intruções try/catch/finally é o mecanismo de tratamento de exceção de javaScript;
*   A cláusula try dessa instrução simplesmente define o bloco de código cujas exceções devem ser tratadas.
*   A cláusula catch é um bloco de instruções que são chamadas quando ocorre uma exceção em qualquer lugar dentro do bloco try.
*   A cláusula finally contendo o código de limpeza que é garantidamente executado, independente do que aconteça no bloco try.

Exemplo:
try {
    // Normalmente, este código é executado do início ao fim do bloco sem problemas. Mas às vezes pode disparar uma exceção
    // diretamente, com uma instrução throw, ou indiretamente, pela chamada de um método que lança uma exceção.
}

catch(e){
    //  As instruções deste bloco são executadas se, e somente se, o bloco try dispara uma exceção. 
    //  Essas instruções podem usar a variável local e se referir ao objeto Error ou a outro valor que foi lançado.
    //  Este bloco pode tratar da exceção de algum modo, pode ignorá-la não fazendo nada ou pode lançar a exceção 
    //  novamente com throw.
}

finally{
    //  Este bloco contém instruções que são sempre executadas, independente
    //  do que aconteça no bloco try. Elas são executadas se o bloco
    //  try terminar:
}

*/

function factorial(x){
    if (x < 0) throw new Error("x must not be negative");   // Se o argumento de entrada é inválido, dispara uma exceção!
    for(var f = 1; x > 1; f *= x, x--) /* vazio */ ;        // Caso contrário, calcula um valor e retorna normalmente!
    
    return f;
}

var x = -1;
console.log(factorial(x));

try {
    var n = Number(prompt("Please enter a positive integer", "")); // Pede para o usuário inserir um número
    var f = factorial(n);  // Calcula o fatorial do número, supondo que a entrada seja válida
    alert(n + "! = " + f); // Mostra o resultado
}

catch(ex) {
    alert(ex); // Se a entrada do usuário não foi válida, terminamos aqui
               // Informa ao usuário qual é o erro
}