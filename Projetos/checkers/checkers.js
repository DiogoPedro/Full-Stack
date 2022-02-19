window.onload = init;

function init() {
    criarTabuleiro();
};

function moviment(evt) {
    alert(evt.currentTarget.innerText);
};

function criarTabuleiro() {
    let elGame = document.getElementById("game");
    let positionsChars = ["A", "B", "C", "D", "E", "F", "G", "H"];

    for (let i = 1; i <= 100; i++) {
        let create = criarElement();
        if ((i > 1 && i < 10) || (i > 91 && i < 100)) {
            if (i != 1) {
                create.innerText = positionsChars[i % 10 - 2];
            };
        };

        if (i > 10 && i <= 90) {
            if (i % 10 == 1 || i % 10 == 0) {
                create.innerText = Math.floor((i - 1) / 10);
            }
        }
        create.addEventListener("click", moviment);
        elGame.appendChild(create);
    }
}

function criarElement() {
    let x = document.createElement("p");
    return x;
};