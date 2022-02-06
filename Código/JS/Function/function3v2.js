//Copia os length elements do array from para o array to.
//Começa a cópia com o elemento from_start no array from e copia esse elemento em to_start no array to.
//É difícil lembrar a ordem dos argumentos.

function arraycopy(/* array */ from, /* índice */ from_start,/* array */ to, /* índice */ to_start,/* integer */ length){
// o código fica aqui
}

// Esta versão é um pouco menos eficiente, mas não é preciso lembrar da ordem dos argumentos, sendo que from_start e to_start tem 0 como padrão.

function easycopy(args) {
    arraycopy(args.from, args.from_start || 0, /* Observe o valor padrão fornecido */ args.to, args.to_start || 0, args.length);
}

// Aqui está como easycopy() poderia ser chamada:
var a = [1,2,3,4], b = [];
easycopy({from: a, to: b, length: 4});