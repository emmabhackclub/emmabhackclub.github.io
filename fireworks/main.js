var p1;
var p2;
var color;
var opening;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    one = true;
    color = 200;
    opening = true;
}

function draw() {
    if (opening) {
        textFont("Verdana");
        textAlign(CENTER);
        textSize(60);
        fill("orange");
        text("FIREWORK", width/2, height/4);
        textSize(20);
        text("Click to create a firework\nHold keys for color (r,o,y,g,b,p)\nHold space for dots", width/2, height/2);
    }
    if (keyIsDown(82)) {
        color = "red";
    }
    else if (keyIsDown(79)) {
        color = "orange";
    }
    else if (keyIsDown(89)) {
        color = "yellow";
    }
    else if (keyIsDown(71)) {
        color = "green";
    }
    else if (keyIsDown(66)) {
        color = "blue";
    }
    else if (keyIsDown(80)) {
        color = "purple";
    }
    else {
        color = 200;
    }
    console.log(opening);
}

function mousePressed() {
    if (opening) {
        opening = false;
        background(0);
    }
    else {
        p1 = mouseX;
        p2 = mouseY;
        stroke(color);

        if (keyIsDown(32)) {
            strokeWeight(5);
            line(p1, p2, p1 + .1, p2 + .1);
            line((width - p1), p2, (width - (p1 + .1)), p2 + .1);
            line((width - p1), (height - (p2)), (width - (p1 + .1)), (height - (p2 + .1)));
            line(p1, (height - (p2)), p1 + .1, (height - (p2 + .1)));
        }
        else {
            strokeWeight(3);
            line(width / 2, height / 2, p1, p2);
            line(width / 2, height / 2, (width - p1), p2);
            line(width / 2, height / 2, (width - p1), (height - p2));
            line(width / 2, height / 2, p1, (height - p2));
        }
    }
}

function keyPressed() {
    if (keyIsDown(17) && keyIsDown(83)) {
        saveCanvas('fireworks', 'png');
    }
    return false;
}