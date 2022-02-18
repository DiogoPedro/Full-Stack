//Interfaces utilizado para a descricao de objetos;

//No exemplo abaixo temos uma funcao que recebe como parametro um objeto, esse pode ser de qualquer tipo, a funcao define
//uma propriedade e um tipo especifico, no caso a propriedade eh chamada de label e seu tipo eh string;
//Se for passado um objeto qualquer que possua tal propriedade, e a propriedade respeite a tipagem, o compilador ira permitir a execucao;
function printLabel(AnyObject: { label: string }) {
    console.log(AnyObject.label);
}

let myObj = { size: 10, label: "Jojo, jojo, jojo, Sou awarado! thunddddd!", state: true };
printLabel(myObj);

//Vamos criar uma interface, client;
interface client {
    readonly id: number;    //Só é definido na hora da declaracao, nao pode ser modificado;
    name: string;
    age: number;
    sex?: string;   //Atributo opcional;
    address: string;
};

//Uma interface que recebe de herança;
interface clientPrime extends client {
    level_client: number;
    priority: boolean;
};

//As interfaces tem o poder de serem expandidas, se gerar error, na pratica eh interessante na hora de extender alguma
//biblioteca, api e.t.c
interface client {
    free_Shipping: boolean;
}