//Valores qualquer devem descritos como unknown;
let who: unknown;
who = [3,2,1];
who = true;
who = "Hello World";

let greet:string;
//Isso vai resultar em um erro, greet nao sabe que valor who possui;
//greet = who;

//Dessa forma o typrescript permite, porque acredita ser do tipo esperado, mas isso pode nao ser considerado uma boa pratica.
if(typeof who === "string"){
    greet = who;
}

//Any ele pode ser bem parecido com o unknown a diferenca eh que que com any voce pode chega propriedades fazendo o compilador ignorar
//se aquilo eh possivel ou nao, enquanto unknown nao permitiria nem msm a compilacao;

let looselyTyped: any = 4;
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
 
let strictlyTyped: unknown = 4;

//Nao permite verificar se existe tal propriedade ou nao;
//strictlyTyped.toFixed();

//Cast, forçar um tipo a ser outro;
let box: unknown = "I am a String";
let send: String;

//Para fazer send receber box, sem precisa fazer a verificao do tipo, voce pode fazer de dois modos;
box = <String>box;
box = box as string;

//Alguns exemplos de declaracoes de tipo com funcoes, o tipo eh declarado no final uma droga se comparada a C que era no inicio, ahhhh =(
function imprimirHelloWorld():void{
    console.log("Hello World");
}

//Terceiro parametro opcional
function mul(x1:number, x2:number, x3?:number):number{
    let resultado:number;
    if(x3 !== undefined){
        resultado = x1*x2*x3;
    } else resultado = x1*x2;
    
    return resultado;
}

//Terceiro parametro opcional
function mul2(x1:number, x2:number, x3:number = 3):number{
    return x1*x2*x3;
}
console.log(`O valor da mul: ${mul2(2,3,1)}`);