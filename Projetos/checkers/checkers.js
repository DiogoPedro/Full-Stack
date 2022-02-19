window.onload = init;

function init() {
    criarTabuleiro();
    //criarPecas();
};
function criarTabuleiro() {
    let elGame = document.getElementById("game");
    let positionsChars = ["A", "B", "C", "D", "E", "F", "G", "H"];

    for (let i = 1; i <= 100; i++) {
        let create = document.createElement("p");
        //Adicionando no tabuleiro a primeira e ultima coluna com os valores entre 1 a 8;
        if ((i > 1 && i < 10) || (i > 91 && i < 100)) {
            if (i != 1) {
                create.innerText = positionsChars[i % 10 - 2];
                create.style.backgroundColor = "rgb(211, 211, 211)";
            };
        };
        //Adicionando no tabuleiro a primeira e ultima linha com positionsChars;
        if (i > 10 && i <= 90) {
            if (i % 10 == 1 || i % 10 == 0) {
                create.innerText = Math.floor((i - 1) / 10);
                create.style.backgroundColor = "rgb(211, 211, 211)";
            }
        }
        //Preenchimento das bordas;
        if (i == 1 || i == 10 || i == 91 || i == 100){
            create.style.backgroundColor = "rgb(211, 211, 211)";
        }
        //Adicionando o evento nos grid itens do tabuleiro jogavel;
        if (i > 11 && i < 90 && i % 10 > 1){
            create.addEventListener("click", moviment);
        }
        elGame.appendChild(create);
    }
}
// function criarPecas(){
//     let elGame = document.getElementById("game");
//     for(i=13; i<41; i+=2){
        
//     }
// };
function moviment(evt) {
    alert(evt.currentTarget.innerText);
};
