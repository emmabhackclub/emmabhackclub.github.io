var bear;
var progression;
var backgroundImage;
var backgroundImage2;
var level;

function setup() {
    createCanvas(400, 500);
    bear = createSprite(width / 4, height, 10, 10);
    progression = 0;
    level = 1;
    backgroundImage1 = loadImage("river.png");
    backgroundImage2 = loadImage("woods.jpg");
}

function draw() {
    textAlign(CENTER);
    //opening level
    if (level == 1) {
        background(backgroundImage1);
        if (progression == 0) {
            text("A farmer has a black bear, a deer, and a bush.\n He wants to cross a river.\n The bear, if left alone, will eat the deer.", width / 2, (height / 4));
        }
        if (progression == 1) {
            text("The farmer takes the deer across the river.", width / 2, height / 4);
        }
        if (progression == 2) {
            text("The bear, being an omnivore, eats the bush anyway.", width / 2, height / 4);
        }
        if (progression == 3) {
            text("Newly invigorated, the bear swims the river.\n The bear eats the deer.\n Then it eats the farmer.", width / 2, height / 4);
        }
        if (progression == 4) {
            text("The black bear grows stronger.\n You are now:\n\n GRIZZLY BEAR", width / 2, height / 4);
        }
        if (progression >= 5) {
            text("Your choices are:\n\n a: catch fish in the river\n b: forage for berries in the woods\n c: head to the city and hunt\n  more tasty human meat", width / 2, height / 4);
        }
    }
    //second level correct
    if (level == 2) {
        background(backgroundImage2);
        if (progression == 0) {
            text("Berries are hard to find,\n and food is scarce.", width / 2, height / 4);
        }
        if (progression == 1) {
            text("You decide to leave the area.", width / 2, height / 4);
        }
        if (progression == 2) {
            text("Your choices are\n\n a: head south\n b: head north\n c: return to the river", width / 2, height / 4);
        }
    }
    drawSprites();
}

function mouseClicked() {
    progression = progression + 1;
}

function keyTyped() {
    if ((key === 'b') && (level=1)) {
        level = 2;
        progression = 0;
    }
}