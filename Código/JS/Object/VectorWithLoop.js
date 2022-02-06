const funcs = []

for(var x=0; x<10; x++){
    funcs.push(function(){
        return x-2
    })

}

console.log(funcs[2](2))
console.log(funcs[3](3))

const funcs2 = []

for(let y=0 ; y<10; y++){
    funcs2.push(function(){
        return y
    })

}

console.log(funcs2[2](2))
console.log(funcs2[3](3))

//Let possui memoria, por isso ele armazena o valor correto, enquanto o var não possui.