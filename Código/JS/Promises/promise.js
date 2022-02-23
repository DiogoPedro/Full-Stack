/*A sintaxe de uma promisse eh a criacao de um objeto promise, onde o argumento eh uma callback com dois parametros, resolve, e reject.
//Na parte da construcao do codigo da callback, voce deve executar alguma coisa que seja relevante e depedendo do resultado voce deve ter
//sucesso ou fracasso. Caso a callback tenha feito um sucesso retorne o resolve com algum conteudo caso tenha fracassado use o reject com
//algum retorno;
*/
const promise1 = new Promise((resolve, reject) => {
    const name = "Diogo";

    if (name == "Pedro") {
        resolve("Retornando uma string");
    } else {
        reject(404);
    }
});

/*A utilizacao do metodo then, faz como parametro o retorno da promise resolve que voce declarou anteriormente,ou seja so sera executada se ocorreu
o sucesso da promise, caso tenha ocorrido o erro voce pode trata-lo utilizando o catch, o parametro eh justamente o valor retornado do erro
da promise;
 */

promise1.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(typeof error);
});

//Vamos aqui, ve como funciona o uso do .then de forma escalonavel;
const promise2 = new Promise((resolve, reject) => {
    const test = true;

    if (test == true) {
        resolve(5);
    } else {
        reject(-5);
    }
});

promise2.then((data) => {
    return data;
}).then((positivo) => {
    console.log("O valor eh positivo: " + positivo);
}).catch((negativo) => {
    console.log("O valor eh negativo: " + negativo);
});

//Vamos testar em nao tentar retornar um valor em .then, e tentar escalonar com outro then, tentando receber o valor como argumento;
const promise3 = new Promise((resolve, reject) => {
    const test = true;

    if (test == true) {
        resolve(10);
    } else {
        reject(-10);
    }
});

promise3.then((data) => {
}).then((positivo) => {
    console.log("O valor eh positivo: " + positivo);
}).catch((negativo) => {
    console.log("O valor eh negativo: " + negativo);
});