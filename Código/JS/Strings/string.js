var anime = "hunter x hunter";
console.log(anime);

console.log(anime.charAt()); /*manda imprimir  o caractere da string;
*como o parametro está vazio, ele imprime a posicao 0;
*/
console.log(anime.charAt(2));//imprimindo 'n'

console.log(anime.charCodeAt(0));/*Demonstra o valor do caractere da posicao selecionada
na tabela ascII*/

console.log(anime.indexOf('x'));//Procura a posicao do caractere e na string;
console.log(anime.indexOf('h'));/*Em caso repetitivo, procura ate achar o primeiro
caracterer, nao buscando os demais na string;*/

console.log(anime.substring(6));//imprime tudo a partir do caractere 6;
console.log(anime.substring(0,6));//Imprime tudo entre 0 e 5, excluindo o 6;

var first = 'hunter', second = 'x', three = 'hunter';
console.log(first + ' ' + second + ' ' + three);
console.log(first.concat(' ').concat(second).concat(' ').concat(three));

console.log(anime - first); /*mensagem de erro, nao podemos remover a string
por meio do sinal de -, apesar de podemos concatenar as duas por sinal de mais*/

console.log('Gon, Killua, Kurapika'.split(',')); /*O parametro split, criar uma string
com varios elementos, a partir de um parametro que indicara a divisao, no caso a ',' */

/*Aprendendo a usar o templeat, para imprimir frases mais elaboradas*/
console.log("vamos usar um templeate, ok?");
var palavra = 'wish';
var sentimento = 'desejo';

//////////////////////////////////////////////////////////////////////////////////
const template = ` testando: ${sentimento} = ${palavra} `;
console.log(template);

//Definição para template;

