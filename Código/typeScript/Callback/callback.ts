/*Para declarar uma funcao como parametro primeiro precisamos definir o nome da funcao e em seguida, declaramos os seus parametros
* eu pessoalmente nao vejo sentido nessa forma de se declarar mas eh isso:
*/
function valueNegative( ArrayNumber: number[] , functionExample: (x: number[])  => number) : Number{
    return -1 * functionExample(ArrayNumber); 
};
function someValues(Array : number[]) : number {
    let delta: number = 0;

    for(let i=0; i< Array.length; i++){
        delta += Array[i];
    }

    return delta;
};

let values = [3,5,7];
console.log(valueNegative(values, someValues));