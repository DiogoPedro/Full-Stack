//Armazenar uma funcao em uma variavel
let fazerSomaA_B = function (a, b){
    return (a + b)
}

let z = fazerSomaA_B(2,3)
console.log(fazerSomaA_B(2,5))

//Armazenando uma funcao Arrow em uma variavel
let fazerSomaA_B2 = (a, b = -3) => (
    a + b
)

console.log("Teste: ", fazerSomaA_B2(5))
//retorno implicito
let soma = (a, b) => a + b
console.log(soma(3,6))