var GRAVITY = 0.3;
var JUMP = -3;
var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var numGroundSprites;
var player;
var obstacleSprites;
var isGameOver;
var score;
var size;

function setup() {
    isGameOver = false;
    score = 0;
    color = 0;
    
    createCanvas(500, 400);
    background(0);
    groundSprites = new Group();

    numGroundSprites = width / GROUND_SPRITE_WIDTH + 1;
    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = createSprite(n * 50, height - 25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
    }

    player = createSprite(100, height - 75, 40, 40);

    obstacleSprites = new Group();
    size = 5;
}

function draw() {
    if (isGameOver) {
        background(0);
        fill (255);
        textAlign(CENTER);
        textFont("Courier");
        if (score >= 7500) {
            text("Wow. Wooooow.  I am impressed.\nI never thought anyone would actually get this far.", camera.position.x, camera.position.y-60);
        }
        else if (score >= 5000) {
            text("Amazing!", camera.position.x, camera.position.y-40);
        }
        else if (score >= 4000) {
            text("Excellent!", camera.position.x, camera.position.y-40);
        }
        else if (score >= 3000) {
            text("Very well done!", camera.position.x, camera.position.y-40);
        }
        else if (score >= 2000) {
            text("Good job!", camera.position.x, camera.position.y-40);
        }
        else if (score >= 1000) {
            text("Pretty good.  Try again?", camera.position.x, camera.position.y-40);
        }
        else if (score >= 100) {
            text("Eh, alright.  Try again?", camera.position.x, camera.position.y-40);
        }
        else if (score<100){
            text("Let's pretend that never happened.", camera.position.x, camera.position.y-40);
        }
        text("Your score was: " + score, camera.position.x, camera.position.y-20);
        text("Click anywhere to restart", camera.position.x, camera.position.y);
    }
    else {
        background(0);
        player.velocity.y = player.velocity.y + GRAVITY;

        if (groundSprites.overlap(player)) {
            player.velocity.y = 0;
            player.position.y = (height - 50) - (player.height / 2);
        }

        if (keyDown(UP_ARROW)) {
            player.velocity.y = JUMP;
        }
        if (player.position.y < 0) {
            player.position.y = 0
            player.velocity.y = 0
        }

        player.position.x = player.position.x + 5;
        camera.position.x = player.position.x + (width / 4);

        var firstGroundSprite = groundSprites[0];
        if (firstGroundSprite.position.x <= camera.position.x - ((width / 2) + firstGroundSprite.width / 2)) {
            groundSprites.remove(firstGroundSprite);
            firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites * firstGroundSprite.width;
            groundSprites.add(firstGroundSprite);
        }

        if (random() > .98) {
            var obstacle = createSprite(camera.position.x + width, random(0, (height - 50) - 15), size, size);
            obstacleSprites.add(obstacle);
        }

        var firstObstacle = obstacleSprites[0];
        if (obstacleSprites.length > 0 && firstObstacle.position.x <= camera.position.x - (width / 2 + firstObstacle.width / 2)) {
            removeSprite(firstObstacle);
        }

        obstacleSprites.overlap(player, endGame);

        drawSprites();
        score = score + 1;
        textAlign(CENTER);
        text(score, camera.position.x, 10);
        
        if (size < 100) {
            size = 5 + score*0.025;
        }
    }
}

function endGame() {
    isGameOver = true;
}

function mouseClicked() {
    if (isGameOver) {
        groundSprites.removeSprites();
        for (var n = 0; n < numGroundSprites; n++) {
            var groundSprite = createSprite(n * 50, height - 25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
            groundSprites.add(groundSprite);
        }
        player.position.x = 100;
        player.position.y = height - 75;
        obstacleSprites.removeSprites();
        score = 0;

        isGameOver = false;
    }
}