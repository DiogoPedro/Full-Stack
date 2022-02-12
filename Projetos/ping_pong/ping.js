window.onload = init;
function init() {
    //Elements in game;
    let btnStart = document.getElementById("initButton");
    let elPlayer1 = document.getElementById("player1");
    let elPlayer2 = document.getElementById("player2");
    let elSquare = document.getElementById("square");
    
    //Position in the game in coordinates and score;
    let scorePlayer1, scorePlayer2;
    let xPlayer1, yPlayer1;
    let xPlayer2, yPlayer2;
    let xSquare, ySquare;
    
    //Direction and control about animation
    let frames, control = false;
    let direction, shift, directionCPU, xDirectionSquare, yDirectionSquare, shiftSquare;
    shiftSquare = 4; shift = 3; direction = 0;

    //Data in the game
    const [playerHeight, playerWidth] = [85, 20];
    const [mapHeight, mapWidth, squareSide] = [500, 900, 20];

    //Events about the game;
    btnStart.addEventListener("click", startGame);
    document.addEventListener("keydown", keyPressDown);
    document.addEventListener("keyup",keyPressUp);
    
    function startGame(){
        if(!control){
            //Break loop in the requestAnimationFrame;
            cancelAnimationFrame(frames);
            //Position Inital [x,y];
            [xPlayer1, yPlayer1] = [320, 310];
            [xPlayer2, yPlayer2] = [1195, 310];
            [xSquare, ySquare] = [765,355];
            //Pontuation Inital;
            [scorePlayer1, scorePlayer2] = [0, 0];
            //Game initialized;
            control = true;
            directionSquareRandom();
            gameRun();
        }
    };
    function gameRun(){
        if(control){
            movementP1();
            movementP2();
            movementSquare();
            collision();
            checkScores();
        }
        frames = requestAnimationFrame(gameRun);
    };
    function keyPressDown(evt){
        if(evt.keyCode == 87){ // 87 == 'w'
            direction = -1; //Negative decrement y, up my div
        } else if(evt.keyCode == 83){ // 83 =='s'
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
        //Condition contour = body - mapHeight = 720 - 500 = 220px where 110px in top and 110px in down, more 20px because header.
        if(yPlayer1 + playerHeight >= mapHeight + 129){
            yPlayer1 = mapHeight - playerHeight + 129;
        } else if(yPlayer1 <= 130){
            yPlayer1 = 130;
        }

        //Resolves player 1's problem of eating the square when abruptly ascending or descending.
        if(xPlayer1 <= xSquare && xSquare <= xPlayer1 + playerWidth){
            if(yPlayer1 <= ySquare && ySquare <= yPlayer1 + playerHeight){
                direction = 0;
            };
        };
        //CSS Absolute modify
        elPlayer1.style.top = yPlayer1 + "px";
    };
    function movementP2(){
        if(yPlayer2 <= ySquare){
            directionCPU = 1;
        } else 
            directionCPU = -1;

        yPlayer2 += directionCPU * (shift * 0.75);
        //Condition contour = body - mapHeight = 720 - 500 = 220px where 110px in top and 110px in down, more 20px because header.
        if(yPlayer2 + playerHeight >= mapHeight + 129){
            yPlayer2 = mapHeight - playerHeight + 129;
        } else if(yPlayer2 <= 130){
            yPlayer2 = 130;
        }

        //Resolves player 1's problem of eating the square when abruptly ascending or descending.
        if(xPlayer1 <= xSquare && xSquare <= xPlayer1 + playerWidth){
            if(yPlayer1 <= ySquare && ySquare <= yPlayer1 + playerHeight){
                direction = 0;
            };
        };
        //CSS Absolute modify
        elPlayer2.style.top = yPlayer2 + "px";
    };
    function movementSquare(){
        //Condition contour usign position relative, let's do it comparations in use;
        if(ySquare <= 130 || ySquare + squareSide >= mapHeight + 129){
            yDirectionSquare *= -1;
        }
        if(xSquare <= 320 || xSquare + squareSide >= mapWidth + 320){
            xDirectionSquare *= -1;
        }
        if(Math.random <= 0.5){
            xSquare += xDirectionSquare * shiftSquare;
            ySquare += yDirectionSquare * shift;
        } else {
            xSquare += xDirectionSquare * shift;
            ySquare += yDirectionSquare * shiftSquare;
        }
        elSquare.style.left = xSquare + "px";
        elSquare.style.top = ySquare + "px";
    };
    function collision(){
        if(xPlayer1 <= xSquare && xSquare <= xPlayer1 + playerWidth){
            if(yPlayer1 <= ySquare && ySquare <= yPlayer1 + Math.floor(playerHeight * 0.4)){
                yDirectionSquare == 0 ? yDirectionSquare = -1 : yDirectionSquare *= -1; 
                xDirectionSquare *= -1; //Do moviment in diagonal;
                shift += 0.2;
            } else if(yPlayer1 <= ySquare && ySquare <= yPlayer1 + Math.floor(playerHeight * 0.5)){
                xDirectionSquare *= -1;
                yDirectionSquare = 0; //Do moviment in right;
            } else if(yPlayer1 <= ySquare && ySquare <= yPlayer1 + playerHeight){
                yDirectionSquare == 0 ? yDirectionSquare = 1 : yDirectionSquare *= 1;
                xDirectionSquare *= -1; //Do moviment in left;
                shift += 0.2;
            };
        };
        if(xPlayer2 <= xSquare && xSquare <= xPlayer2 + playerWidth){
            if(yPlayer2 <= ySquare && ySquare <= yPlayer2 + Math.floor(playerHeight * 0.4)){
                yDirectionSquare == 0 ? yDirectionSquare = -1 : yDirectionSquare *= -1; 
                xDirectionSquare *= -1; //Do moviment in diagonal;
                shift += 0.2;
            } else if(yPlayer2 <= ySquare && ySquare <= yPlayer2 + Math.floor(playerHeight* 0.5)){
                xDirectionSquare *= -1;
                yDirectionSquare = 0; //Do moviment in right;
                shift += 0.2;
            } else if(yPlayer2 <= ySquare && ySquare <= yPlayer2 + playerHeight){
                yDirectionSquare == 0 ? yDirectionSquare = 1 : yDirectionSquare *= 1;
                xDirectionSquare *= -1; //Do moviment in left;
                shift += 0.2;
            };
        };
        //Speed limited;
        (shift > 11) ? shift = 11 : "";
    };
    function directionSquareRandom(){
        //Direction Square
        if(Math.random() < 0.5){
            xDirectionSquare = 1;
        } else {
            xDirectionSquare = -1;
        };
        //I need two random, one for cada direction.
        if(Math.random() < 0.5){
            yDirectionSquare = 1;
        } else {
            yDirectionSquare = -1;
        }
    };
    function checkScores(){
        //Check the colision 
        xSquare <= 320 ? scorePlayer2 += 1 : ""
        xSquare + squareSide >= mapWidth + 320 ? scorePlayer1 += 1 : ""
        //Winner
        if(scorePlayer1 >= 5){
            cancelAnimationFrame(frames);
            control = false;
            alert("Winner Player 1!!!, did 5 scores");
        };
        if(scorePlayer2 >= 5){
            cancelAnimationFrame(frames);
            control = false;
            alert("Winner Player 2!!!, did 5 scores");
        };
    };
};