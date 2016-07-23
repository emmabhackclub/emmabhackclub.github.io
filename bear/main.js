var bear;
var progression;
var backgroundImage;
var backgroundImage2;
var backgroundImage3;
var backgroundImage4;
var level;

function setup() {
    createCanvas(400, 500);
    bear = createSprite(width / 4, height, 10, 10);
    progression = 0;
    level = 1;
    backgroundImage1 = loadImage("river.png");
    backgroundImage2 = loadImage("woods.jpg");
    backgroundImage3 = loadImage("snowscape.png");
    backgroundImage4 = loadImage("ultimate.png");
}

function draw() {
    textAlign(CENTER);
    textSize(16)
    textFont("Georgia");
    //opening level
    if (level == 1) {
        background(backgroundImage1);
        fill(250, 150, 100);
        if (progression == 0) {
            text("A farmer has a black bear, a deer, and a bush.\n He wants to cross a river.\n The bear, if left alone, will eat the deer.", width / 2, (height / 4));
        }
        if (progression == 1) {
            text("The farmer takes the deer across the river.", width / 2, height / 4);
        }
        if (progression == 2) {
            text("The bear, being an omnivore,\n eats the bush anyway.", width / 2, height / 4);
        }
        if (progression == 3) {
            text("Newly invigorated, the bear swims the river.\n The bear eats the deer.\n Then it eats the farmer.", width / 2, height / 4);
        }
        if (progression == 4) {
            text("The black bear grows stronger.\n You are now:\n\n GRIZZLY BEAR", width / 2, height / 4);
        }
        if (progression >= 5) {
            text("You are hungry again.\n Your choices are:\n\n a: catch fish in the river\n b: forage for berries in the woods\n c: head to the city and hunt\n  more tasty human meat", width / 2, height / 4);
        }
    }
    //second level correct
    if (level == 2) {
        background(backgroundImage2);
        fill(200, 100, 0);
        if (progression == 0) {
            text("You forage for berries in the woods.", width / 2, height / 4);
        }
        if (progression == 1) {
            text("Berries are hard to find,\n and food is scarce.", width / 2, height / 4);
        }
        if (progression == 2) {
            text("You decide to leave the area.", width / 2, height / 4);
        }
        if (progression >= 3) {
            text("Your choices are\n\n a: head south\n b: head north\n c: return to the river", width / 2, height / 4);
        }
    }
    //third level correct
    if (level == 3) {
        background(backgroundImage3);
        fill(0);
        if (progression == 0) {
            text("It's incredibly cold in the north,\n and food is hard to find.", width / 2, height / 4);
        }
        if (progression == 1) {
            text("You begin to regret your decision.", width / 2, height / 4);
        }
        if (progression == 2) {
            text("Do you continue to press north?", width / 2, height / 4);
        }
        if (progression >= 3) {
            text("Your choices are:\n\n a: return south\n b: remain in the north", width / 2, height / 4);
        }
    }
    //fourth level correct
    if (level == 4) {
        console.log("change");
        background(backgroundImage3);
        fill(0);
        if (progression == 0) {
            text("It's the hardest endeavor of your ursid life,\n but you learn to live in the north.", width / 2, height / 4);
        }
        if (progression == 1) {
            text("You become one with this\n harsh and beautiful landscape,\n living with it in perfect harmony.", width / 2, height / 4);
        }
        if (progression == 2) {
            text("You grow stronger, fiercer, bolder.\n You are now:\n\n POLAR BEAR", width / 2, height / 4);
        }
        if (progression == 3) {
            text("Living here is easy and pleasurable,\n but it offers no fulfillment.", width / 2, height / 4);
        }
        if (progression == 4) {
            text("Do you continue to reign as master of the north,\n or turn to even greater pursuits?", width / 2, height / 4);
        }
        if (progression >= 5) {
            text("Your choices are:\n\n a: continue your comfortable life\n  b: seek out another challenge", width / 2, height / 4);
        }
    }
    //fifth level correct
    if (level == 5) {
        background(backgroundImage4);
        fill(255);
        if (progression == 0) {
            text("You meditate upon the nature of the universe.", width / 2, height / 4);
        }
        if (progression == 1) {
            text("After years of deep concentration,\n its secrets are revealed in a flash\n of great and terrible revelation.", width / 2, height / 4);
        }
        if (progression == 2) {
            text("You are now:\n\n ULTIMATE BEAR", width / 2, height / 4);
        }
        if (progression == 3) {
            text("You have won.", width / 2, height / 4);
        }
        if (progression == 4) {
            text("You have won.\n At the universe.", width / 2, height / 4);
        }
        if (progression >= 5) {
            text("You have won.\n At the universe.\n\n CONGRATULATIONS, ULTIMATE BEAR", width / 2, height / 4);
        }
    }
    console.log(level);
}

function mouseClicked() {
    progression = progression + 1;
}

function keyTyped() {
    if (key === 'b' && (level==1) && (progression>= 5)) {
            level = 2;
            progression = 0;
    }
    if (key === 'b' && (level==2) && (progression >= 3)) {
            level = 3;
            progression = 0;
            console.log("level 3");
    }
    if (key === 'b' && (level==3) && (progression >= 3)) {
            level = 4;
            progression = 0;
            console.log("level 4");
    }
    if (key === 'b' && (level==4) && (progression >= 5)) {
            level = 5;
            progression = 0;
    }
}