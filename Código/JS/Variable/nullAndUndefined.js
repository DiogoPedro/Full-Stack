let x //variavel sem valor
console.log(x) //Possui valor indefinido

let y = null // variavel que nao aposta para nimguem, nao faz referencia
console.log(y) //Possui valor null

let cachorro = {
    tamanho: 1.79,
    nome: 'Ezreal'
}

console.log(cachorro)

let z = cachorro    //z faz referencia ao objeto cachorro, cachorro armazena endereco do objeto
z.tamanho = 1.82

console.log(z)

/* Tenta acessar um atributo indefinido de um objeto, causara erro.*/