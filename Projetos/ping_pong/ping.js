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
    let direction=0, shift = 4;
    
    //Data in the game
    let [playerHeight, playerWidth] = [85, 20];
    let [mapHeight, mapWidth, squareSide] = [500, 900, 20];

    //Events about the game;
    btnStart.addEventListener("click", startGame);
    document.addEventListener("keydown", keyPressDown);
    document.addEventListener("keyup",keyPressUp);
    
    function startGame(evt){
        if(!control){
            //Break loop in the requestAnimationFrame;
            cancelAnimationFrame(frames);

            //Position Inital [x,y];
            [xPlayer1, yPlayer1] = [350, 310];
            [xPlayer2, yPlater2] = [1170, 310];
            [xSquare, ySquare] = [442,220];

            //Game initialized;
            control = true;
            gameRun();
        }
    };
    function gameRun(){
        if(control){
            movementP1();
        }
        frames = requestAnimationFrame(gameRun);
    };
    function keyPressDown(evt){
        if(evt.keyCode == 87){
            direction = -1; //Negative decrement y, up my div
        } else if(evt.keyCode == 83){
            direction = 1; //Negative increment y, down my div
        }
    };
    function keyPressUp(evt){
        if(evt.keyCode == 87){
            direction = 0;
        } else if(evt.keyCode == 83){
            direction = 0;
        }
    };
    function movementP1(){
        yPlayer1 += direction * shift;
        //Condition contour = body - mapHeight = 720 - 500 = 220px where 110px in top and 110px in down.
        if(yPlayer1 + playerHeight >= mapHeight + 129){
            yPlayer1 = mapHeight - playerHeight + 129;
        } else if(yPlayer1 <= 130){
            yPlayer1 = 130;
        }
        //CSS Absolute modify
        elPlayer1.style.top = yPlayer1 + "px";
    }
};
