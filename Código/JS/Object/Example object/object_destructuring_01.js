let Diogo = {
    Nome : "Diogo Pedro",
    Nascimento : "26/04/1999",
    Sexo : "M"
};

let { Nome, Sexo } = Diogo;
console.log(Nome, Sexo);

let { Nome: Name, Sexo: Sex} = Diogo;
console.log(Name, Sex);

let { Tipo_Sanguinio: X, Doador: Y = false} = Diogo;
console.log(X, Y);  /*Quando voce busca um atributo que nao existe no objeto retornara undefined, contudo vc pode
associar alguma coisa caso nao encontre nenhum valor */

//Vamos utilizar o destructuring em arrayz, no caso não usamos mais {} e passamos a utilizar os [].

let [a0, a1, ,a3 = -1] = [3]; //Eh possivel pular valores e atribuir valores caso não identifique nenhum;
console.log(a0, a1, a3);