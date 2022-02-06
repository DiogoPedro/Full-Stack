/*
    Note que this é uma palavra-chave e não uma variável ou nome de propriedade. A sintaxe de Java-Script não permite atribuir
um valor a this .
    Ao contrário das variáveis, a palavra-chave this não tem escopo e as funções aninhadas não herdam o valor de this de 
suas chamadoras. Se uma função aninhada é chamada como um método, seu valor de this é o objeto em que foi chamada. Se uma função aninhada é chamada como uma função, então seu valor de this vai ser o objeto global (modo não restrito) ou undefined (modo restrito). É um erro comum supor que uma função aninhada chamada como função pode utilizar this para obter o contexto da chamada da função externa. Se quiser acessar o valor de this da função externa, você precisa armazenar esse valor em uma variável que esteja no escopo da função interna. É comum usar a variável self para esse propósito. 
*/

var o = {
    m: function() {
        var self = this; //já que é um método de um objeto, a palavra-chave vai retorna o objeto o;
        console.log(this === o); //true, '===' eh de equidade.
        f();
        function f() {
            console.log(this === o); //false, 'o' pode assumir o valor undefined(modo restritro) ou global. 
            console.log(self === o); //true.
        }
    }
};
o.m();

//Parametros opcionais

/*Quando uma função é chamada com menos argumentos do que parâmetros declarados, os parâmetros adicionais são configurados com o valor undefined . Frequentemente é útil escrever funções de modo que alguns argumentos sejam opcionais e possam ser omitidos na chamada da função. Para fazer isso, deve-se atribuir um valor padrão razoável aos parâmetros omitidos.
*/

/*O comportamento padrão de JavaScript é satisfatório na maioria dos casos: os argumentos ausentes são undefined e os argumentos extras são simplesmente ignorados.
*/

