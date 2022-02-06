let name = 'Diogo'
let greet = 'Hello, ' + name + '!'
let template = `
    Hello, 
    ${name}!` /* Ele salva contando o formato, tabs, quebra de linha e.tc */
    
console.log(greet,template)

console.log(`Calculo: 1 + 1 = ${1 + 1}`) // ${} tenta interpratar a operação;

const up = text => text.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)