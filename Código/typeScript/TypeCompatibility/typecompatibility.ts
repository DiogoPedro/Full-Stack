//A ideia eh trazer a compatilibidade entre classes e ou interfaces.

class Player {
    public name: string;
    public fullname: string;
    public age: number;
    public available: boolean;
}

class Citizen {
    public fullname: string;
}

let player1: Player = { name: "Diogo", fullname: "Diogo Pedro", age: 22, available: false };

//Funciona, pq Player possui o atributo fullname que possui a mesma tipagem que Citiziem
//Na pratica, citizien1 casa com todos os atributos e metodos que player tem que possa fazer a compatibilidade;
let citizen1 = new Player();

//Observe que se voce executar o console.log, podemos observar que citizen2 na verdade eh player1 em JS, mas em TypeScript ele so possui
//a propriedade fullname;
let citizen2: Citizen = player1;    //Se voce buscar o codigo JS, vale a pena observar que let citizen2 = player1;
console.log(citizen2.fullname);     //Os nomes dos parametros precisam ser iguais para fazer o casamento perfeito;

let xxx: number = player1.age;  //Comando permitido
//let yyy: number = citizen2.age; //Comando que gera um erro em TypeScript, mas em JS ele funciona que eh uma beleza

console.log(xxx);
//console.log(yyy);
