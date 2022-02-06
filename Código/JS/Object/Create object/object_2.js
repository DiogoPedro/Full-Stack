/* Objetos usando identificadores apartir de arrays vs ().identificador)
    Utilizando o identifador com ".", é estatico, dessa forma a única forma de acessar esse atributo eh escrevendo.
    ex : pessoa.cpf;

    Utilizando os colchetes ([]), como se fossem um array, pra acessar determinada atributo usamos uma string, com
    o nome da propriedade dentro dos colchetes. Vale salientar que isso eh uma forma dinámica de acesso já que,
    ele vai tratar a string e fazer associações como se fosse uma expressão normal. Ideal para laços.
    ex : pessoa["cpf"];

*/ 

/*
    Pode haver o caso de vc possuir um objeto, que herdou propriedades, que não lhe convem de tal modo que
    precisamos fazer o descarte dessas propriedades e pega as que nos interessa;
*/
var retangulo = {"base": 2, "largura": 3};
var triangulo = inherit(retangulo);
triangulo["altura"] = 4;

for(var x in triangulo){
    if(triangulo.propertyIsEnumerable(x))
        console.log("Propriedade original : \"" + x + "\" com valor:" + triangulo[x]);
}
/*
O método propertyIsEnumerable() refina o teste de hasOwnProperty() . Ele retorna true somente se
a propriedade nomeada é uma propriedade própria e seu atributo enumerável é true . Certas pro-
priedades internas não são enumeráveis.
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function inherit(p){ //meu argumento eh um objeto que irei herdar;
    if(p == null) throw TypeError();
    if(Object.create)   return Object.create(p);
    var t = typeof p;
    if(t !== "object" && t !== "function") throw TypeError();
    function f() {};
    f.prototype = p;
    return new f();
}

var o = {};
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 3;
console.log(q.x + q.y);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  Métodos getter e setter de propriedades;
*
*   As propriedades definidas pelos métodos getter e setter, são conhecidas como propriedades de acesso, para diferenciar
*   das propriedades de dados que possui um valor simples.
*
*   Quando um programa deseja consultar o valor de uma propriedade de acesso, utiliza o getter(), o seu retorno é o valor
*   da expressão que da acesso à propriedade.
*
*   Quando você deseja modificar o valor de uma propriedade de acesso, você usa o método setter, o valor retornado é 
*   ignorado.
*
*   As propriedades de acesso não tem um atributo gravavel, como as propriedades de dados. Se uma propriedade tem um 
*   método getter e setter, podemos dizer que ela é uma propriedade de leitura/gravavel;
*/

//Veja os exemplos dessa funcao, em objeto3.js