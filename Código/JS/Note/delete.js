/*
*   O operador delete serve para deletar um atributo de um objeto ou mesmo de array, retornando true caso consiga,
*   ou se simplesmente não apresente mensagem de erro.
*   Delete espera que seja um lvalue, contudo ele não pode deletar algumas propriedades básicas internas, já que são
*   imunes e as declarações feitas pelo usuário utilizando var. As funções definidas com a instrução function
*   e os parâmetros de função declarados também não podem ser excluídos.
*   O operador delete exclui apenas as propriedades próprias, não as herdadas.
*
*/