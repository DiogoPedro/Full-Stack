window.onload = init;
let [qntPlayer1, qntPlayer2] = [12, 12];
let vezDoJogador = 'P1';
let posicaoAntesEvento = null;
let posicaoAposEvento = null;
let deuok = false;

function init() {
    criarTabuleiro();
    criarMarcacao();
    criarPecas(0, 3, "P1", false);
    criarPecas(5, 9, "P2", true);
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
        if (i == 1 || i == 10 || i == 91 || i == 100) {
            create.style.backgroundColor = "rgb(211, 211, 211)";
        }
        //Adicionando o evento nos grid itens do tabuleiro jogavel;
        if (i > 11 && i < 90 && i % 10 > 1) {
            create.addEventListener("click", moviment);
            create.setAttribute("class", "peca_do_tabuleiro");
        }
        elGame.appendChild(create);
    }
};
function criarMarcacao() {
    let elPecas = document.getElementsByClassName("peca_do_tabuleiro");
    //let cor = "rgb(211, 211, 211)";
    let controle = false;

    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            elPecas[i * 8 + j].setAttribute("id", String(i * 8 + j));

            if (controle) {
                elPecas[i * 8 + j].style.backgroundColor = "black";
            };
            controle = !controle;
        };
        controle = !controle;
    };
};
function criarPecas(position, end, namePlayer, controle) {
    let elPecas = document.getElementsByClassName("peca_do_tabuleiro");
    for (i = position; i < end; i++) {
        for (j = 0; j < 8; j++) {
            if (controle) {
                elPecas[i * 8 + j].style.color = "white";
                elPecas[i * 8 + j].appendChild(document.createTextNode(namePlayer));
            };
            controle = !controle;
        };
        controle = !controle;
    };
};
function moviment(evt) {
    if (qntPlayer1 == 0 || qntPlayer2 == 0) {
        alert("Game Over!");
    };

    if (posicaoAntesEvento == null) {
        if (evt.currentTarget.innerText == vezDoJogador) {
            posicaoAntesEvento = posicaoJogador(evt.currentTarget.id);
            if (vezDoJogador == "P1") {
                evt.currentTarget.style.backgroundColor = "blue";
            } else {
                evt.currentTarget.style.backgroundColor = "red";
            }
        };
    } else {
        if (posicaoAposEvento == null) {
            posicaoAposEvento = posicaoJogador(evt.currentTarget.id);

            //Verificar que se existe texto, eh um requisito para ser valida;
            if (evt.currentTarget.innerText == "" && jogadaValidaDama()) {
                posicaoAposEvento = parseInt(evt.currentTarget.id);
                jogada();

            } else {
                let el = document.getElementsByClassName("peca_do_tabuleiro")[posicaoAntesEvento];
                el.style.backgroundColor = "black";
                [posicaoAntesEvento, posicaoAposEvento] = [null, null];
            };
        };
    };
};
function posicaoJogador(idPlayer) {
    let position = 0;
    let elPecas = document.getElementsByClassName("peca_do_tabuleiro");

    while (elPecas[position].id != idPlayer) {
        position++;
    };
    return position;
};
function jogadaValida() {
    //Falta a verificacao da SuperDama;
    let diagonalA, diagonalB;

    if (vezDoJogador == "P1") {
        [diagonalA, diagonalB] = [7, 9];
    } else {
        [diagonalA, diagonalB] = [-9, -7];
    }

    if (posicaoAposEvento == (posicaoAntesEvento + diagonalB) || posicaoAposEvento == (posicaoAntesEvento + diagonalA)) {
        if ((posicaoAntesEvento % 8 == 0) && posicaoAposEvento == (posicaoAntesEvento + diagonalA)) {
            return false;
        }
        if (((posicaoAntesEvento + 1) % 8 == 0) && posicaoAposEvento == (posicaoAntesEvento + diagonalB)) {
            return false;
        }
        return true;
    } else {
        return false;
    };
};
function jogadaValidaDama() {
    if (jogadaValida() || comerPeca("cimaParabaixo", true) || comerPeca("baixoParacima", true)) {
        let posicoes = [-18, -14, 14, 18];
        let podeJogarDenovo = false;
        let [copyPosicaoAntesEvento, copyPosicaoAposEvento] = [posicaoAntesEvento, posicaoAposEvento];

        for (let x in posicoes) {
            if (copyPosicaoAposEvento + posicoes[x] > 0 && copyPosicaoAposEvento + posicoes[x] < 64) {
                posicaoAntesEvento = copyPosicaoAposEvento;
                posicaoAposEvento = copyPosicaoAposEvento + posicoes[x];
            }

            if (comerPeca("cimaParabaixo", false) || comerPeca("baixoParacima", false)) {
                podeJogarDenovo = true;
            }
        }

        if (!podeJogarDenovo) {
            console.log("Entrou");
            vezDoJogador == "P1" ? vezDoJogador = "P2" : vezDoJogador = "P1"
        }

        [posicaoAntesEvento, posicaoAposEvento] = [copyPosicaoAntesEvento, copyPosicaoAposEvento];
        return true;
    } else {
        return false;
    }
}
function comerPeca(positionAttack, validar) {
    let elemento, diagonalA, diagonalB, diagonalAA, diagonalBB;
    //diagonalA = diagonal principal
    //digonalB = diagonal secundaria
    if (positionAttack == "cimaParabaixo") {
        [diagonalA, diagonalB] = [7, 9];
        [diagonalAA, diagonalBB] = [14, 18];
    } else {
        [diagonalA, diagonalB] = [-9, -7];
        [diagonalAA, diagonalBB] = [-18, -14];
    };

    if (posicaoAposEvento == posicaoAntesEvento + diagonalBB || posicaoAposEvento == posicaoAntesEvento + diagonalAA) {
        if ((posicaoAntesEvento % 8 == 0) && (posicaoAntesEvento + 1) % 8 == 0) {
            return false;
        }
        if (Math.abs(posicaoAposEvento - posicaoAntesEvento) == 18 || Math.abs(posicaoAposEvento - posicaoAntesEvento) == 14) {
            if (Math.abs(posicaoAposEvento - posicaoAntesEvento) == 14) {
                if (positionAttack == "cimaParabaixo") {
                    elemento = document.getElementById(posicaoAntesEvento + diagonalA);
                } else {
                    elemento = document.getElementById(posicaoAntesEvento + diagonalB);
                }
            } else {
                if (positionAttack == "cimaParabaixo") {
                    elemento = document.getElementById(posicaoAntesEvento + diagonalB);
                } else {
                    elemento = document.getElementById(posicaoAntesEvento + diagonalA);
                }
            };

            //Devorando a peça;
            if (elemento.innerText != "" && !elemento.innerText.includes(vezDoJogador)) {
                if (validar) {
                    //Contabilizar a quantidade de peccas
                    vezDoJogador == "P1" ? qntPlayer2-- : qntPlayer1--;
                    elemento.innerText = "";
                };

                return true;
            };
        };
    };
    return false;
};
function jogada() {
    let el = document.getElementsByClassName("peca_do_tabuleiro")[posicaoAntesEvento];
    let el2 = document.getElementsByClassName("peca_do_tabuleiro")[posicaoAposEvento];

    //Fazendo a posicao original voltar a sua cor de origem, e alterando o id das minhas pecas para manter a posicao no mapa;
    el.style.backgroundColor = "black";
    el2.setAttribute("id", posicaoAntesEvento);
    el.setAttribute("id", posicaoAposEvento);

    //Fazendo a troca de posicao entre null e peca jogada;
    swap(el, el2);

    posicaoAntesEvento = null;
    posicaoAposEvento = null;
};
function swap(node1, node2) {
    node1.style.backgroundColor = "black";
    node2.setAttribute("id", posicaoAntesEvento);
    node1.setAttribute("id", posicaoAposEvento);

    const afterNode2 = node2.nextElementSibling;
    const parent = node2.parentNode;
    node1.replaceWith(node2);
    parent.insertBefore(node1, afterNode2);
};