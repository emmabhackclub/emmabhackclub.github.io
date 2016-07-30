var aliens;
var lowerx;
var player;
var projs;
var proj;
var shots;
var turn;
var dir;

function preload() {
    lowerImage = loadImage("lower.png");
    middleImage = loadImage("middle.png");
    upperImage = loadImage("upper.png");
    shipImage = loadImage("ship.jpg");
}

function setup() {
    createCanvas(600, 600);
    background(0);
    lowerX = 50
    dir = 0;
    turn = true;
    dir = 0;
    
    aliens = new Group();
    for (var n = 0; n < 11; n++) {
        //lower
        alien = createSprite(lowerX, 300, 0, 0);
        alien.addImage(lowerImage);
        aliens.add(alien);
        alien = createSprite(lowerX, 260, 0, 0);
        alien.addImage(lowerImage);
        aliens.add(alien);
        //middle
        alien = createSprite(lowerX, 220, 0, 0);
        alien.addImage(middleImage);
        aliens.add(alien);
        alien = createSprite(lowerX, 180, 0, 0);
        alien.addImage(middleImage);
        aliens.add(alien);
        //upper
        alien = createSprite(lowerX, 140, 0, 0);
        alien.addImage(upperImage);
        aliens.add(alien);
        alien = createSprite(lowerX, 100, 0, 0);
        alien.addImage(upperImage);
        aliens.add(alien);
        lowerX = lowerX + 40;
        console.log(n);
    }
    player = createSprite(width/2, height-25, 0, 0);
    player.addImage(shipImage);
    
    projs = new Group;
    shots = new Group;
}

function draw() {
    background(0);
    
    //move player
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - 25)) {
        player.position.x += 3;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > 25) {
        player.position.x -= 3;
    }
    //player shoot
    if (keyWentDown(" ")) {
        if (projs.length < 1) {
            proj = createSprite(player.position.x, height - 50, 5, 20);
            projs.add(proj);
            proj.shapeColor = "green"
            proj.setSpeed(5, 270);
        }
        else if (proj.position.y < -20) {
            proj.remove();
            proj = createSprite(player.position.x, height - 50, 5, 20);
            projs.add(proj);
            proj.shapeColor = "green"
            proj.setSpeed(5, 270);
    
        }
    }
    
    aliens.overlap(projs, hit);
    player.overlap(shots, end);
    shots.overlap(aliens, shotLayer);
    
    console.log("projs" + projs.length);
    
    drawSprites();
}

// //move aliens
setInterval(move, 1500);
function move() {
    if (dir == 3) {
        turn = false;
    } if (dir == 0) {
        turn = true;
    }
    if (turn) {
    for (var p = 0; p < aliens.length; p++) {
        aliens[p].position.x = (aliens[p].position.x + 40);
    }
    dir = dir + 1;
    } else {
        for (var p = 0; p < aliens.length; p++) {
        aliens[p].position.x = (aliens[p].position.x - 40);
    }
    dir = dir - 1
    }
}

//aliens shoot
setInterval(shoot, 1000);
function shoot() {
    for (var p = 0; p < aliens.length; p++) {
        if (random() > .95) {
            shot = createSprite(aliens[p].position.x, aliens[p].position.y + 45, 5, 20);
            shots.add(shot);
            shot.visible = false;
            shot.shapeColor = "white"
            shot.setSpeed(5, 90);
            if (!shot.overlap(aliens)) {
                shot.visible = true;
            }
        }
    }
}

function hit(spriteA, spriteB) {
    spriteA.remove(); spriteB.remove();
}

function shotLayer(spriteA, spriteB) {
    spriteA.remove();
}
//endgame
function end(spriteA, spriteB) {
    spriteA.remove(); spriteB.remove();
        //text
        textAlign(CENTER);
        textFont("Arial");
        textSize(60);
        fill = (100, 100, 0);
        text("GAME OVER", width/2, height/3);
        //clear sprites
        aliens = [];
        shots = [];
        projs = [];
    setTimeout(function () {
        location.reload();
    }, 5000);
}