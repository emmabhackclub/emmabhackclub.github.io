var player;
var enemy;
var ball;
var ballAngle;
var playerScore;
var enemyScore;

function setup() {
    createCanvas(500, 300);
    enemy = createSprite(5, height / 2, 10, 60);
    player = createSprite((width - 5), height / 2, 10, 60);
    ball = createSprite((width / 2), height / 2, 10, 10);
    ballAngle = random(-25, 25);
    playerScore = 0;
    enemyScore = 0;
}

function draw() {
    background(0, 0, 0);
    stroke(255);
    line((width / 2), 0, (width / 2), height);
    ball.setSpeed(-5, ballAngle);

    textSize(20);
    textFont("Courier");
    text(enemyScore, width / 4, height / 3);
    text(playerScore, width / 4 * 3, height / 3);

    player.shapeColor = "white";
    enemy.shapeColor = "white";
    ball.shapeColor = "white";

    //bouncing 
    //sprites
    if (ball.overlap(player)) {
        ball.position.x = width - 20;
        ballAngle = (180 - (ballAngle + random(5, 10)));
        console.log(ballAngle);
    }
    if (ball.overlap(enemy)) {
        ball.position.x = 20;
        ballAngle = (180 - (ballAngle + random(5, 10)));
        console.log(ballAngle);
    }
    //edges
    if (ball.position.y >= (height - 10)) {
        ball.position.y = (height - 15);
        ballAngle = (-(ballAngle + random(5, 10)));
        console.log(ballAngle);
    }
    if (ball.position.y <= 10) {
        ball.position.y = 15;
        ballAngle = (-(ballAngle + random(5, 10)));
        console.log(ballAngle);
    }

    //player controls
    if (keyDown(DOWN_ARROW) && player.position.y < (height - 30)) {
        player.position.y += 3;
    }
    if (keyDown(UP_ARROW) && player.position.y > 30) {
        player.position.y -= 3;
    }

    //enemy response
    if ((ball.position.y > enemy.position.y) && enemy.position.y <= (height - 30)) {
        enemy.position.y = enemy.position.y + 1.5;
    }
    if (ball.position.y < enemy.position.y && (enemy.position.y >= 30)) {
        enemy.position.y = enemy.position.y - 1.5;
    }

    //restart
    if ((enemyScore <= 10) && (ball.position.x > (width + 50))) {
        enemyScore = enemyScore + 1;
        console.log(enemyScore, "enemy reset");
        reset();
    }
    if ((playerScore <= 10) && (ball.position.x < -50)) {
        playerScore = playerScore + 1;
        console.log(playerScore, "player reset");
        reset();
    }
    if (playerScore >= 11) {
        ball.setSpeed(0,0);
        textAlign(CENTER);
        textSize(40);
        text("YOU  WON", width / 2, height / 2);
        restart();
    }
    if (enemyScore >= 11) {
        ball.setSpeed(0,0);
        textAlign(CENTER);
        textSize(40);
        text("YOU  LOST", width / 2, height / 2);
        restart();
    }
    drawSprites();
}

function reset() {
    enemy.position.x = 5;
    enemy.position.y = height / 2;
    player.position.x = width - 5;
    player.position.y = height / 2;
    ball.position.x = width / 2;
    ball.position.y = height / 2;
    ballAngle = random(-25, 5);
    console.log("reset");
}

function restart() {
    textAlign(CENTER);
    textSize(20);
    text("Click to restart", width / 2, height / 4 * 3);
    if (mouseIsPressed) {
        playerScore = 0;
        enemyScore = 0;
        reset();
        console.log("restart");
    }
}