/*
Qualquer valor em JavaScript que não seja uma string, um número, true , false , null ou undefined , é
um objeto. E mesmo que strings, números e valores booleanos não sejam objetos, eles se comportam
como objetos imutáveis.
Cada objeto possui uma ou mais propriedade e, essa tem valores associados que chamamos de atributos de propriedade:
• O atributo gravável especifica se o valor da propriedade pode ser configurado.
• O atributo enumerável especifica se o nome da propriedade é retornado por um laço for/in .
• O atributo configurável especifica se a propriedade pode ser excluída e se seus atributos podem
ser alterados.

Além de suas propriedades, todo objeto tem três atributos de objeto associados:
• O protótipo de um objeto é uma referência para outro objeto do qual as propriedades são
herdadas.
• A classe de um objeto é uma string que classifica o tipo de um objeto.
• O flag extensível de um objeto especifica (em ECMAScript 5) se novas propriedades podem
ser adicionadas no objeto.

*/

//Criacao de um objeto atraves de um objeto literal.

function criar(x, y){
    var book = {nome: x, codigo: y};
    return book;
}

console.log(typeof a, typeof b);
var a = criar("Dom quixote", "15&65");
var b = criar("Dom casmurro", "325A2");

console.log(a, b);
console.log(typeof a, typeof b);


//Criar um objeto com new, voce precisa usar uma funcao inicializadora, que recebe o nome de construtora;

var data01 = new Date();

//Criar um novo objeto atraves do protótipo de outro objeto;
/*
    ECMAScript 5 define um método, Object.create() , que cria um novo objeto, usando seu primeiro
    argumento como protótipo desse objeto. Object.create() também recebe um segundo argumento
    opcional que descreve as propriedades do novo objeto.
*/

var monstro = {nome: "Dio Brando", cor: "loiro"};
var c = Object.create({pro1:5, prop2:7});
var d = Object.create(monstro);

console.log(d, d.nome, d.cor); //Nesse caso observamos que as propriedades herdadas permanecem de forma oculta.
d.nome = "Dio Brando"; d.cor = "loiro";  //Essa linha, estamos negando as propriedades herdadas.
console.log(d, d.nome, d.cor);

/*
function inherit(p){ //meu argumento eh um objeto que irei herdar;
    if(p == null) throw TypeError();
    if(Object.create)   return Object.create(p);
    var t = typeof p;
    if(t !== "object" && t !== "function") throw TypeError();
    function f() {};
    f.prototype = p;
    return new f();
}
 */