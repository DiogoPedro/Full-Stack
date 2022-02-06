var p = {           // Eh um super objeto;
    x: 3.0, y: 4.0, // x e y são propriedades de dados de leitura-gravação normais.
    get r() {       // r é uma propriedade de acesso de leitura-gravação com métodos getter e setter.
        return Math.sqrt(this.x*this.x + this.y*this.y); 
    }, // Não se esqueça de colocar uma vírgula após os métodos de acesso. 
    
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
        var ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },

    get theta() { // theta é uma propriedade de acesso somente para leitura, apenas com o método getter.
        return Math.atan2(this.y, this.x); 
    } 
}

/*  Para usar o objeto descritor de propriedades, chame Object.getOwnPropertyDescriptor() ; Cujo os parametros são
um objeto com o qual voce deseja saber a propriedade ex: Object.getOwnPropertyDescriptor(Date, 'year'); e o segundo
parametro eh consultar as propriedades de descrição de 'year' que perntecem a o objeto Date;
*/

//console.log(p.r); //Me retorna com a propriedade de acesso get r;
p.r = 8;           //Nao me retorna nada, ja que eh uma funcao get, e sim uma funcao set, ele modifica o valor de x e y;
//console.log(p.r); //Observe que teremos um novo valor de get r, por conta da função set;

var book = {'nome' : "Investimentos Inteligentes", 'categoria' : "Finanças"};

//console.log(Object.getOwnPropertyDescriptor(book, 'nome'));
//console.log(Object.getOwnPropertyDescriptor(p, 'r'));
//console.log(Object.getOwnPropertyDescriptor(p, 'theta'));


/*
    Para configurar os atributos de uma propriedade ou criar uma nova propriedade com os atributos
    especificados, chame Object.defineProperty() , passando o objeto a ser modificado, o nome da pro-
    priedade a ser criada ou alterada e o objeto descritor de propriedade:
*/

var obj = {};
Object.defineProperty(obj, 'x', {value : -1, writable : true, enumerable : true, configurable : true });

//value: Valor retornado por uma funcao get;
//writable: O valor pode ou nao ser alterado através de uma atribuição;
//enumerable: A propriedade pode ser enumerada atraves de um for in;
//configurable: A propriedade nao pode ser deletada, e atributos como value e writable nao podem ser alterados;

console.log(Object.getOwnPropertyDescriptor(obj, 'x'));

Object.defineProperty(obj, 'x', {writable : false});
obj.x = 30;     //Vai haver falha na alteracao da propriedade;
//console.log(obj.x);

Object.defineProperty(obj, 'x', {enumerable : false});
for(var mostra in obj){
    console.log(obj[mostra]); //Vai haver falha nao vai mostra a proprieda obj.x; 
}

Object.defineProperty(obj, 'x', {value : 3}); //O valor pode ser alterado já que a propriedade configurable permite fazer
//aleracoes nas propriedades de value e writable, mesmo que o ultimo seja false;
//console.log(obj.x); 

Object.defineProperty(obj, 'x', {configurable : false});
obj.x = 30;

for(var mostra in obj){
    console.log(obj[mostra]); //Vai haver falha nao vai mostra a proprieda obj.x; 
}
//console.log(delete obj.x);
//console.log(obj);
//console.log(obj.x);

Object.defineProperty(obj, 'x', {configurable : true});
console.log(delete obj.x);

/*
 * O descritor de propriedade passado para Object.defineProperty() não precisa incluir todos os qua-
tro atributos. Se você estiver criando uma nova propriedade, os atributos omitidos são considerados
false ou undefined . Se você estiver modificando uma propriedade já existente, os atributos omitidos
são simplesmente deixados intactos. Note que esse método altera uma propriedade própria já exis-
tente ou cria uma nova propriedade própria, mas não altera uma propriedade herdada.
 */