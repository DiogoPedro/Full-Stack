//A declaração de funcoes eh praticamente a mesma que javascript, entao todos os exemplos estaram nesse arquivo;
function helloWorld():void{
    console.log("Hello World");
};

//Declaracao de funcao retornando um tipo diferente de void;
function helloWorldString():string{
    return "Hello World";
};

//Declaracao de funcao com parametro pre-definido, mesma forma que js;
function mult(x: number, y:number, z:number = -1):number{
    return x*y*z;
};

//Declaracao de um parametro opcional;
function mult2(x: number, y:number, z?:number):number{
    if(z == undefined){
        return x*y;    
    } else {
        return x*y*z;
    };
};

//Uso de arrow function sem definir e definindo type;
let helloWorldArrow = () => console.log();

//Uso de arrow function definindo voce vai precisar criar uma funcao no retorno;
let helloWorldArrow2: () => void = function () {
    console.log("Hello World la la la 2")
};

helloWorldArrow2();