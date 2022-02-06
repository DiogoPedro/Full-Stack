/*
*   A instrução "with" eh usada para ampliar o escopo de um objeto temporariamente. Escopo:
*   with (objeto){      };
*   Com o uso do with, podemos diminuir o trabalho do programador afim de escrever apenas o nomes das propriedades para
*   fazer a associação deles, vale salientar que não podemos criar uma propriedade dentro do with, e ele pode ser usado
*   em funções, abaixo dois exêmplos distintos;
*
*
*   E uma instrucao que pode nao ser bem otimizada pelo compilador gerando um pouco mais de lentidao, podendo ser evitada;
*/

var pessoa = {nome: "Irene", idade: 57, personalidade : "Dificil" };
console.log(pessoa);

with(pessoa){
    nome = "Jose Claudio";
    idade = 42;
    personalidade = "humourada";

};

console.log(pessoa);

//Tentativa de adicionar uma propriedade com with;
with(pessoa){
    nome = "Jose Claudio Souza";
    sexo = 'M';
};

console.log(pessoa);
console.log("Observe que o sexo, pode se tornar uma variavel global, local ou ate uma propriedade. Sexo:" + sexo);
console.log("\n\n\n\n");

/* Vamos agora user a instrução with, com uma função */

with(Math) //Se for uma instrução unica, nao precisamos de chaves {};
    var x = PI * E * 1;

console.log(x);
// Observe, que se não tivessemos o with, precisariamos utilizar Math.PI e Math.E;