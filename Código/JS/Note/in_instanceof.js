/*
    Em javaScript, podemos verificar se determinado objeto possui algum atributo de interesse apartir do operador "in"
    
    O operador "in", recebe do lado esquerdo uma string, e no lado direito um objeto. Caso o objeto possua a propriedade
    retorna True caso não tenha retorna false.

    O operador "instanceof", verifica se um objeto pertence a determinada classe, caso sim retorna true, caso ñ retorna
    false, vale salientar que ele retorna true se apenas vc utilizar o objeto ao inves da classe, para verificar.
    Recebe um objeto a esquerda e na direita, recebe o método.

*/

var x = {a : 2, b : 3, c: 4};
console.log("b" in x);

var y = new Date();
console.log(y instanceof Date);

//Em javaScript, uma classe de objeto é considerado como se fosse uma função construtora que as inicializa;