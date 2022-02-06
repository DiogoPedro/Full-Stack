//para transformar qualquer valor em booleano
var aux = 5
let x = true
let y = false
let z = x && y

if(aux){
    console.log("Qualquer número, é true, but don't the zero\n")
}

console.log("se liga na maciota")

let nome = ''
console.log(nome || "Sem nenhum nome, selecionado ainda...\n")

nome = 'O filme do Pele'
console.log(nome || "Sem nenhum nome, selecionado ainda...\n")

//  Resultados que são falsos em java Script
console.log(!!'')   //String vazia
console.log(!!NaN)  //Algo sem valor
console.log(!!null)
console.log(!!undefined)