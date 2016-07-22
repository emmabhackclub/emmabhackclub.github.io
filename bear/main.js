var bear;
var progression;
var backgroundImage;

function setup() {
    createCanvas(400, 500);
    bear = createSprite(width / 4, height, 10, 10);
    progression = 0;
    level = start;
    backgroundImage = loadImage("river.png");
}

function draw() {
    textAlign(CENTER);
    if (level = start) {
        background(backgroundImage);
        if (progression == 0) {
            text("A farmer has a black bear, a deer, and a bush.\n He wants to cross a river.\n The bear, if left alone, will eat the deer.", width / 2,(height / 4));
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
            text("The black bear grows stronger.\n You are now:\n\n GRIZZLY BEAR" , width / 2, height / 4);
        }
        if (progression >= 5) {
            text("Your choices:\n\n a: forage in the woods for berries\n b: catch fish in the river\n c: head to the city and hunt\n  more tasty human meat" , width / 2, height / 4);
        }
    }

    drawSprites();
}

function mouseClicked() {
    progression = progression + 1;
}