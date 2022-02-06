/**
 *  Arrays são objetos que herdam o prototipo objeto, por esse fato os arrays sao dinamicos, podem ser criadas propriedades,
 * deletar e modificar, como atributos normais de objetos. Contudo possuem propriedades especiais, que sao otimizadas como
 * os indices. O array possui uma propriedade invariavel importante o length, para ser invariavel ela modifica o array para
 * atender ao criterio de ser maior do que o array.
 */

/**
 * Exemplos abaixo de criacao de arrays literais e utilizando uma construtora;
 */

var a = [1,2,3];
var b = [,,];   //Ele faz a omisãso dos elementos a esquerda da virgula;

//console.log(a.length);
//console.log(b.length);

var c1 = new Array();    //Sem argumentos um array vazio;
var c2 = new Array(10);  //Com apenas um argumento e numerico determina a quantidade de elementos que possui o array; 
var c3 = new Array(1, 2, false, []); //Com varios argumentos, sejam iguais ou distintos, serão os elementos do array;

//console.log(c1);
//console.log(c2.length);
//console.log(c3 + " Tamanho do array:" + c3.length);

//Se dentro os colchetes for um inteiro, positivo e se estiver entre 0 e 2³² ele enxerga como um indice, caso contrario 
//o array enxerga como propriedade de objeto sem otimizacoes;

var d = ['Pedro']; //Cria um array com indice 0 com a string 'Pedro';
d['5'] = 8;        //Se o indice for uma string que seja um inteiro positivo e esteja entre 0 e 2³² enxerga como indice; 
//console.log(d.length);
d['couve'] = 10;   //No caso, foi criado uma propriedade com nome: 'couve' ele não contabiliza a propriedade length;
//console.log(d.length);

//Array esparsos sao arrays, que possuem indicies sem nenhum valor, de tal modo que nao permite sabe o tamanho real do array
var e = new Array(100); //Array esparsos, ja que possui tamanho 100 e nenhum valor;
//console.log(e.length);

e.length = 0;
//console.log(e);
/**
 * ECMAScript 5 define vários métodos novos para iterar por elementos de array, passando cada um,
 * na ordem do índice, para uma função definida por você. O método forEach() é o mais geral deles: 
 */

var data = [1,2,3,4,5]; //Este é o array pelo qual queremos iterar
var sumOfSquares = 0;   //Queremos calcular a soma dos quadrados de data

data.forEach(function(x) { //Passa cada elemento de data para essa função
    sumOfSquares += x*x;   //soma os quadrados
});

//sumOfSquares =>55 : 1+4+9+16+25

//Testando o metodo join;
var f = [2,6,15];
//console.log(typeof f);
f.join();     //Ele nao altera o proprio array;
//console.log(typeof f);
f = f.join(); //f agora recebe a transofrmacao do array em string e as concatena, retornando a string resultante;
//console.log(typeof f);

var g = [1,2,3,4];
g.reverse(); //ele altera o proprio array;
//console.log(g);

var h1 = [9, 7, 55, 2, 1];
var h2 = [9, 7, 55, 2, 1];
var h3 = ['Rafael', 'Thiago', 'rafael', 'guilherme', 'Guilherme', 'Gabriel'];
h1.sort();  //Sem parametros ele tenta fazer uma ordencao apartir do primeiro valor do elemento;
h2.sort(function(a,b){
    if(a>b) //Ponha o 'a' na frente da posicao 'b';
        return 1;
    if(a<b) //Ponha o 'b' na frente da posicao 'a';
        return -1;
    else    //A ordem nao importa no caso;
        return 0;
});
h3.sort();

//console.log(h1);
//console.log(h2);
//console.log(h3);

var i = [1,2,3];    //O metodo concat ele adiciona os argumentos nos array, mas nao altera o array original;
var j = i.concat(4,5);
//console.log(j, i);

/**
 * splice() pode excluir elementos de um array, inserir novos elementos em um array ou efetuar as
duas operações ao mesmo tempo. Os elementos do array que vêm após o ponto de inserção ou
exclusão têm seus índices aumentados ou diminuídos, conforme o necessário, para que perma-
neçam contíguos ao restante do array. O primeiro argumento de splice() especifica a posição do
array em que a inserção e/ou exclusão deve começar. O segundo argumento especifica o número
de elementos que devem ser excluídos (removidos) do array. Se esse segundo argumento é omiti-
do, todos os elementos do array, do elemento inicial até o fim do array, são removidos. splice()
retorna o array dos elementos excluídos ou um array vazio, se nenhum elemento foi excluído.
Por exemplo:
 */

var k = [1,2,3,4,5,6,7,8,9,10];
k.splice(4,4);
//console.log(k);

/**
 * Os dois primeiros argumentos de splice() especificam quais elementos do array devem ser excluí-
dos. Esses argumentos podem ser seguidos por qualquer número de argumentos adicionais, especi-
ficando os elementos a serem inseridos no array, começando na posição especificada pelo primeiro
argumento.
 */

k.splice(3,1,6);
//console.log(k);

/**
 * O metodo .toString(), ele retorna com uma conversao de numero para string concatenado, o msm visto em joi(), sem argumentos
 * Enquanto o toLocaleString(), ele faz apenas a conversao de elemento por elemento em string.
 */
var l = [6,9];
//console.log(typeof l);
l.toString();
//console.log(typeof l)
l = l.toString();
//console.log(typeof l);

var m = [1,2,3];
m.toLocaleString();
//console.log(typeof m[0]);
m = m.toLocaleString();
//console.log(typeof m[0]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var n = [1,2,3,4,5];
var nsum = 0;
n = n.forEach(function(value) { nsum += value; });
//console.log(nsum);