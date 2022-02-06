/**
 * Se você quiser criar ou modificar mais de uma propriedade simultaneamente, use Object.defineProperties(),
 * com os seguintes parametros, O primeiro eh o objeto a ser modificado, e o segundo um objeto que mapeias os nomes
 * de propriedades a serem criadas ou modificadas nos descritores de propriedades.
 */

 var ponto = Object.defineProperties({},{
    x:  {value : 1, writable : true, enumerable : true, configurable : true},
    y:  {value : 1, writable : true, enumerable : true, configurable : true},
    z:  {value : 1, writable : true, enumerable : true, configurable : true},
    soma: {
        get: function() { return (this.x*this.x + this.y*this.y + this.z*this.z) },
        set: function(n) {this.x *= n, this.y *= n},
        enumerable : true,
        configurable : true
    } 
 });

 console.log(ponto.soma);

 /**
* Esse código começa com um objeto vazio e depois adiciona nele duas propriedades de dados e uma
*propriedade de acesso somente para leitura. Ele conta com o fato de que Object.defineProperties()
*retorna o objeto modificado (como acontece com Object.defineProperty() );
*/

/*
* Object.isExtensible();
* Object.preventExtensions();
* Object.seal(); Object.isSealed();
* Object.Freeze(); Object.isFrozen();
*/