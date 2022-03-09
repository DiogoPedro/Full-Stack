//Funcoes async e await

/**
 * As funções assíncronas funcionam como Promisses, porém com uma sintaxe mais simples.
 * Precisamos declarar a função com a palavra async;
 * E quando precisamos aguardar por algo a instrução precisa de await.
 * Podemos aplicar o recurso em funções anonimas e métodos de classes;
 * Tentar o uso de await sem o uso do async vai gerar um erro;
 * Exemplo do seu uso em inserção de banco de dados;
 */

function promisseExample() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Eu sou a mensagem da promisse");
        }, 2000);
    });
}

async function example() {
    console.log("Eu sou o primeiro a aparecer!");
    console.log(await promisseExample());
    console.log("Eu sou o ultimo a aparecer");
}

function exampleSemAsync() {
    console.log("Eu sou o primeiro a aparecer da funcao sem Async!");
    console.log(promisseExample() + " a aparecer da funcao sem Async");
    console.log("Eu sou o ultimo a aparecer da funcao sem Async!");
}

example();
exampleSemAsync();