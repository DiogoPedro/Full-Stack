var estudante = { //objeto 'estudante'
    nome: 'Zryfin', //propridedas
    posicao: 'ADC',
    ranked: 'Ferro',
    estado: 1,
    //nota(x) {
    //    return x*x
    //}
    
};

//console.log(estudante.nome);
//console.log(estudante.estado);
//console.log(estudante,"\n");

//delete estudante.posicao;
//estudante.estado = 0;

//console.log(estudante);
estudante.nota = (x) => (x+1)

console.log(estudante.nota(3))