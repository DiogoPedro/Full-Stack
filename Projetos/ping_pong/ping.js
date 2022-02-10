window.onload = init;

function init() {
    //Elements in game;
    let btnStart = document.getElementById("initButton");
    let elPlayer1 = document.getElementById("player1");
    let elPlayer2 = document.getElementById("player2");
    let elSquare = document.getElementById("square");
    
    //Position in the game in coordinates;
    let xPlayer1, yPlayer1;
    let xPlayer2, yPlater2;
    let xSquare, ySquare;
    
    //Direction and control
    let game, frames, control = false;
    
    //Data in the game
    let [playerHeight, playerWidth] = [20, 85];
    let [mapHeight, mapWidth, squareSide] = [500, 900];

    //Events about the game;
    btnStart.addEventListener("click", startGame);
    document.addEventListener("keydown", movement);
    document.addEventListener("keyup",movement2);
    
    function startGame(){
        if(!control){
            //Break loop in the requestAnimationFrame;
            cancelAnimationFrame(frames);

            //Position Inital [x,y];
            [xPlayer1, yPlayer1] = [350, 310];
            [xPlayer2, yPlater2] = [1170, 310];
            [xSquare, ySquare] = [442,220];

            //Game initialized;
            control = true;
            game();
        }
    };
    function movement(){
        alert(event.keyCode);
    };
    function movement2(){
        let keyPress2 = event.keyCode;
        console.log(keyPress2);
    };
    function game(){
        if(control){
        }
        frames = requestAnimationFrame(game);
    };
};
