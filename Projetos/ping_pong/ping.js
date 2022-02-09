window.onload = init;

function init() {
    //Elements in game;
    let btnStart = document.getElementById("initButton");
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");
    let square = document.getElementById("square");

    //Position in the game;
    let xPlayer1, yPlayer1;
    let xPlayer2, yPlater2;
    let xSquare, ySquare;

    //Direction
    let game, frames;

    //Position Inital
    let [xInitPlayer1, yInitPlayer1] = [350, 325];
    let [xInitPlayer2, yInitPlayer2] = [1170, 325];
    let [xInitSquare, yInitSquare] = [442,220];

    //Data in the game
    let [playerHeight, playerWidth] = [20, 85];
    let [mapHeight, mapWidth, squareSide] = [500, 900];
};