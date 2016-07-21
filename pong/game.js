var player;
var enemy;
var ball;
var ballAngle = 20;

function setup() {
    createCanvas(500, 300);
    enemy = createSprite(5, 75, 10, 60);
    player = createSprite((width-5), 30, 10, 60);
    ball = createSprite((width/2), 30, 10, 10);
    ball.setSpeed(4, ballAngle);
}

function draw() {
    background(0, 0, 0);
    
  //bouncing 
        //sprites
  if (ball.overlap(player)) {
      ball.position.x = width - 15;
      ball.setSpeed(4, (180 - ballAngle));
  }
  if (ball.overlap(enemy)) {
      ball.position.x = 15;
      ball.setSpeed(4, (ballAngle));
  }
        //edges
    if (ball.position.y = (height-5)) {
        
    }
  
  //player controls
  if (keyDown(DOWN_ARROW) && player.position.y < (height - 30)) {
      player.position.y += 4;
  }
  if (keyDown(UP_ARROW) && player.position.y > 0) {
      player.position.y -= 4;
  }
  
  //enemy response
  if (ball.position.y > enemy.position.y) {
      enemy.position.y = enemy.position.y + 4
  }
  if (ball.position.y < enemy.position.y) {
      enemy.position.y = enemy.position.y - 4
  }
    drawSprites();
}