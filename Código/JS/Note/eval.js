/*
*   Agora, vamos entender o conceito de eval;
*   Eval serve para fazer avaliações de código-fonte apartir de strings, retornando alguma coisa.
*   JavaScript faz essa análise apartir de uma função global eval();
*   Eval não pode ser otimizada pelo interprator e pode gerar brechas de segurança, assim deve ser evitada;
*   Eval retorna um único parametro, esse sendo um string, e retorna o  mesmo se não for uma string.
*   Após a analise da string, ela pode retorna a última expressão, instrução da string ou undefined.
*   

*   O principal a saber sobre eval() (quando chamada desse modo) é que ela usa o ambiente da variável
*   do código que a chama. Isto é, ela pesquisa os valores das variáveis e define novas variáveis e funções
*   da mesma maneira como código local faz. Se uma função define uma variável local x e, então, chama
*   eval("x") , ela obtém o valor da variável local. Se chama eval("x=1") , ela altera o valor da variável
*   local. E se a função chama eval("var y = 3;") , ela declarou uma nova variável local y .

*   Se eval() é chamada a partir do código de nível superior, ela opera sobre variáveis globais e funções
*   globais, evidentemente.

*/

var geval = eval;               // Usar outro nome faz uma eval global
var x = "global", y = "global"; // Duas variáveis globais 

function f() {                  // Esta função faz uma eval local
    var x = "local";            // Define uma variável local
    eval("x += 'changed';");    // eval direta configura variável local
    return x;                   // Retorna variável local alterada
}
function g() {                  // Esta função faz uma eval global
    var y = "local";            // Uma variável local
    geval("y += 'changed';");   // eval indireta configura variável global
    return y;                   // Retorna variável local inalterada
}
console.log(f(), x);
console.log(g(), y);

/*
* -> eval modo restrito <-

*   O modo restrito de ECMAScript 5 (consulte a Seção 5.7.3) impõe mais restrições sobre o comporta-
*   mento da função eval() e até sobre o uso do identificador “eval”. Quando eval() é chamada a partir
*   de código de modo restrito ou quando a própria string de código a ser avaliada começa com uma
*   diretiva “use strict”, eval() faz um eval local com um ambiente de variável privado. Isso significa
*   que, no modo restrito, o código avaliado pode consultar e configurar variáveis locais, mas não pode
*   definir novas variáveis ou funções no escopo local.

*   Além disso, o modo restrito torna eval() ainda mais parecida com um operador, transformando
*   “eval” efetivamente em uma palavra reservada. Não é permitido sobrescrever a função eval() com
*   um novo valor. E não é permitido declarar uma variável, função, parâmetro de função ou parâmetro
*   de bloco de captura com o nome “eval".
*/