window.onload = init;

function init() {
    //testePosition();
    //findPlayer1();
    keyPressionado();
};
function findPlayer1(){
    let playerOne = document.getElementById("player1");
    let rect = playerOne.getBoundingClientRect();
    alert(rect.left);

    playerOne.style.left = (rect.left + 0.20) + "px";

    rect = playerOne.getBoundingClientRect();
    alert(rect.left);
}

function testePosition(){
    let myLayer = document.getElementById("player1");
    let x = myLayer.style.left;
    alert(x);
}

function keyPressionado(){
    let mapGame = document.getElementById("mapId");
    mapGame.addEventListener('keypress', () => {
    alert("Apertou o botao");
    });
}