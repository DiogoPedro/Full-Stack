const valores = [7,8,9,11];
valores[4] = 10; //criando um vetor na posicao 4;
valores[10] = 10; //cria espaços vazios até chega na posicao 10;

valores.push(69); //adicionando no final do vetor;
console.log(valores.length); //verificando o tamanho do vetor;

valores.push("Diogo", "Test", "Mandss");

valores.pop(); //remove do top;
delete valores[0];
console.log(valores)