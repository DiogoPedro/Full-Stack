//Tipos primitivos de dados;
let num: number;
let bool: boolean;

//Dado vazio, permite que seja atribuito apenas o valor de null ou undifined, otimo para usar em funcoes que nao retornam nada;
let any : void;
any = null;
any = undefined;

//Tipos de dados dinamicos;
let arrayCaracter : string;

//Formas de declarar arrays e matrizes;
let array: number[];
let array2: Array<number>;
array = [1, 2, 3];
array2 = array;

if(array === array2){
    //console.log(true);
}

let matriz: number[][] = [];
for(let i=0; i<3; i++){
    matriz[i] = [];
    for(let j=0; j<3; j++)
        matriz[i][j] = i + j;
}
//console.log(matriz);

//Criação de tuplas e utilizacao de metodos ja incluso;
let tuple: [string, number];
tuple = ["Diogo Pedro", 22];
arrayCaracter = tuple[0].slice(0,5);
bool = arrayCaracter.includes("Dio");
//console.log(bool);

//Criação de arrays de tuplas;
let tupleArray: [string, number][];
tupleArray = [["Diogo", 1], ["Pedro", 2], ["Franca", 3]];
//console.log(tupleArray);

//enum é um objeto, e para utilizar os valores, funciona como se fosse uma propriedade do objeto;
enum Grade{A=10, B=8, C=7, D=6, F=5};
num = Grade.A;
//console.log(num);

//Valores qualquer devem descritos como unknown;
let xyz: unknown;
xyz = [3,2,1];
xyz = Grade;
xyz = 5.32;
xyz = "Hello World";