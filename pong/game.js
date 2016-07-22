var player;
var enemy;
var ball;
var ballAngle;
var playerScore;
var enemyScore;

function setup() {
    createCanvas(500, 300);
    enemy = createSprite(5, height/2, 10, 60);
    player = createSprite((width-5), height/2, 10, 60);
    ball = createSprite((width/2), height/2, 10, 10);
    ballAngle = random(-25,25);
}

function draw() {
    background(0, 0, 0);
    stroke(255);
    line((width/2), 0, (width/2), height);
    ball.setSpeed(-5, ballAngle);
    
    player.shapeColor = "white";
    enemy.shapeColor = "white";
    ball.shapeColor = "white";

    //bouncing 
    //sprites
    if (ball.overlap(player)) {
        ball.position.x = width - 20;
        ballAngle = (180 - (ballAngle + random(5,10)));
        console.log(ballAngle);
    }
    if (ball.overlap(enemy)) {
        ball.position.x = 20;
        ballAngle = (180 - (ballAngle + random(5,10)));
        console.log(ballAngle);
    }
    //edges
    if (ball.position.y >= (height - 10)) {
        ball.position.y = (height - 15);
        ballAngle = (-(ballAngle + random(5,10)));
        console.log(ballAngle);
    }
    if (ball.position.y <= 10) {
        ball.position.y = 15;
        ballAngle = (-(ballAngle + random(5,10)));
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
        enemy.position.y = enemy.position.y + 1.75;
    }
    if (ball.position.y < enemy.position.y && (enemy.position.y >= 30)) {
        enemy.position.y = enemy.position.y - 1.75;
    }
    
    if (ball.position.x > (width+50) || (ball.position.x < -50)) {
        enemy.position.x = 5;
        enemy.position.y = height/2;
        player.position.x = width-5;
        player.position.y = height/2;
        ball.position.x = width/2;
        ball.position.y = height/2;
        ballAngle = random(-25,25);
        console.log("restart");
    }
    drawSprites();
}