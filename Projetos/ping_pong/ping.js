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
    let direction, directionCPU, xDirectionSquare, yDirectionSquare;
    let shift, shiftSquare, controlColisionP1, controlColisionP2;
    direction = 0;

    //Data in the game
    const [playerHeight, playerWidth] = [85, 20];
    const [mapHeight, mapWidth, squareSide] = [500, 900, 20];

    //Events about the game;
    btnStart.addEventListener("click", startGame);
    document.addEventListener("keydown", keyPressDown);
    document.addEventListener("keyup", keyPressUp);

    //Information about game;
    alert("Welcome the game! Use the 'w' keyboard to move up with the blue player on the left, and 's' to move down with the player");

    function startGame() {
        if (!control) {
            configurationInit();        //Position init, score and control;
            directionSquareRandom();
            gameRun();            
        }
    };
    function gameRun() {
        if (control) {
            yPlayer1 = moviment(yPlayer1, elPlayer1, actived = 1);
            yPlayer2 = moviment(yPlayer2, elPlayer2, actived = 0);
            movementSquare();
            //collision();
            [controlColisionP1, controlColisionP2] = collision(xPlayer1, yPlayer1, controlColisionP1, controlColisionP2);
            [controlColisionP2, controlColisionP1] = collision(xPlayer2, yPlayer2, controlColisionP2, controlColisionP1);
            checkScores();
        }
        frames = requestAnimationFrame(gameRun);
    };
    function configurationInit() {
        //Break loop in the requestAnimationFrame;
        cancelAnimationFrame(frames);
        //Position Inital [x,y];
        [xPlayer1, yPlayer1] = [350, 310];
        [xPlayer2, yPlayer2] = [1170, 310];
        [xSquare, ySquare] = [765, 355];
        //Pontuation Inital;
        [scorePlayer1, scorePlayer2] = [0, 0];
        //Control and shift initialized;
        [shiftSquare, shift] = [4, 3];
        [controlColisionP1, controlColisionP2] = [1, 1];
        control = true;
    }
    function keyPressDown(evt) {
        if (evt.keyCode == 87) { // 87 == 'w'
            direction = -1; //Negative decrement y, up my div
        } else if (evt.keyCode == 83) { // 83 =='s'
            direction = 1; //Negative increment y, down my div
        }
    };
    function keyPressUp(evt) {
        if (evt.keyCode == 87) {
            direction = 0;
        } else if (evt.keyCode == 83) {
            direction = 0;
        }
    };
    function moviment(player, elplayer, actived){
        //CPU or Player 1
        if(actived){
            player += direction * shift;
        } else { 
            if (player < ySquare) {
                directionCPU = 1;
            } else{
                directionCPU = -1;
            }
            player += directionCPU * (shift * 0.82); 
        };
        //Condition contour = body - mapHeight = 720 - 500 = 220px where 110px in top and 110px in down, more 20px because header.
        if (player + playerHeight >= mapHeight + 129) {
            player = mapHeight - playerHeight + 129;
        } else if (player <= 130) {
            player = 130;
        }
        //CSS Absolute modify
        elplayer.style.top = player + "px";
        return player;
    };
    function movementSquare() {
        //Condition contour usign position;
        if (ySquare <= 130 || ySquare + squareSide >= mapHeight + 129) {
            yDirectionSquare *= -1;
        };
        if (xSquare <= 320 || xSquare + squareSide >= mapWidth + 320) {
            xDirectionSquare *= -1;
        };
        if (Math.random <= 0.5) {
            xSquare += xDirectionSquare * shiftSquare;
            ySquare += yDirectionSquare * shift;
        } else {
            xSquare += xDirectionSquare * shift;
            ySquare += yDirectionSquare * shiftSquare;
        }
        elSquare.style.left = xSquare + "px";
        elSquare.style.top = ySquare + "px";
    };
    function collision(xplayer, yplayer, controlColisionPlayer, controlColisionOtherPlay){
        if (xplayer <= xSquare && xSquare <= xplayer + playerWidth && controlColisionPlayer == 1) {
            if (yplayer <= ySquare && ySquare <= yplayer + Math.floor(playerHeight * 0.4)) {
                yDirectionSquare = -1; xDirectionSquare *= -1;
                controlColisionPlayer == 0;  controlColisionOtherPlay = 1;  shift += 0.2;  
            } else if (yplayer <= ySquare && ySquare <= yplayer + playerHeight) {
                yDirectionSquare = 1; xDirectionSquare *= -1;
                controlColisionPlayer == 0;  controlColisionOtherPlay = 1;  shift += 0.2;
            };
            //Control speed
            (shift > 11) ? shift = 11 : "";
        };
        return [controlColisionPlayer, controlColisionOtherPlay]
    };
    function directionSquareRandom() {
        //Direction Square
        if (Math.random() <= 0.5) {
            xDirectionSquare = 1;
        } else {
            xDirectionSquare = -1;
        };
        //I need two random, one for cada direction.
        if (Math.random() <= 0.5) {
            yDirectionSquare = 1;
        } else {
            yDirectionSquare = -1;
        }
    };
    function checkScores() {
        //Score count and control ;
        if (xSquare <= 320) {
            [controlColisionP1, controlColisionP2] = [0,1];
            scorePlayer2 += 1;
        };
        if (xSquare + squareSide >= mapWidth + 320) {
            [controlColisionP1, controlColisionP2] = [1,0];
            scorePlayer1 += 1;
        };
        if (scorePlayer1 >= 5 || scorePlayer2 >= 5){
            cancelAnimationFrame(frames);
            control = false;
            scorePlayer1 >= 5 ? alert("Winner Player 1!!!, did 5 scores") : alert("Winner Player 2!!!, did 5 scores");
        };
    };
};