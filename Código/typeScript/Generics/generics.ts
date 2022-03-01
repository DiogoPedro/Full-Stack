//A ideia de generics eh criar funcoes sem tipagem especifica que funcione para que funcionem com qualquer tipo;
//A ideia mais legal eh quando no 2 periodo eu vi generics sendo utilizado em c++ quando se podia criar uma <list>
//De qualquer coisa, list de vetores, estruturas, booleanos qualquer coisa.

//Exemplo de generics
function identity<Type>(arg: Type): Type {
    return arg;
}
//Exemplo de funcao normal e faça a comparacao
function identity2(arg: number): number {
    return arg;
}

/* Observe que para declarar generics apos definir o nome da funcao voce escreve o "tipo" generico com isso podemos instancia na funcao
qualquer "coisa" com o msm tipo que for definido, veja um exemplo, e logico podemos retornar o msm tipo ou algo diferente. 
 */

function identity3<Type>(arg: Type): Type[] {
    let x: Type[];
    x[0] = arg;
    return x;
}

//Vamos ve a declaracao de generics usando arrow function, observe o uso de indetity;
let myIdentity: <Type>(arg: Type) => Type = identity;

//Engraçado no exemplo acima em JS ele apenas define let myIdentity = identity;