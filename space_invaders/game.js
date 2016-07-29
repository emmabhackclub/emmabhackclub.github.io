var lowerSprites;
var lowerx;

function preload() {
    lowerImage = loadImage("lower.png");
    middleImage = loadImage("middle.png");
    upperImage = loadImage("upper.png");
}

function setup() {
    createCanvas(600, 600);
    background(0);
    lowerX = 50
    
    lowerSprites = new Group();
    for (var n = 0; n < 11; n++) {
        var lowerSprite = createSprite(lowerX, 300, 0, 0);
        lowerSprite.addImage(lowerImage);
        lowerSprites.add(lowerSprite);
        var lowerSprite = createSprite(lowerX, 260, 0, 0);
        lowerSprite.addImage(lowerImage);
        lowerSprites.add(lowerSprite);
        
        lowerX = lowerX + 40;
        console.log(n);
    }
    
    lowerX = 50;
    middleSprites = new Group();
    for (var n = 0; n < 11; n++) {
        var middleSprite = createSprite(lowerX, 220, 0, 0);
        middleSprite.addImage(middleImage);
        middleSprites.add(middleSprite);
        var middleSprite = createSprite(lowerX, 180, 0, 0);
        lowerSprite.addImage(middleImage);
        lowerSprites.add(middleSprite);
        
        lowerX = lowerX + 40;
        console.log(n);
    }
}

function draw() {
    
    drawSprites();
}