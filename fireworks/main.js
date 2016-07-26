var p1;
var p2;
var e1;
var e2;
var one;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    one = true;
}

function draw() {
    console.log(p1, p2);
}

function mouseReleased() {
    p1 = mouseX;
    p2 = mouseY;
    stroke(200);
    strokeWidth(3);
    line(width / 2, height / 2, p1, p2);
    line(width / 2, height / 2, (width-p1), p2);
    line(width / 2, height / 2, (width-p1), (height-p2));
    line(width / 2, height / 2, p1, (height-p2));
}