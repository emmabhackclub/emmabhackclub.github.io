var NUM_CIRCLES = 24;
var circleDiameter;
var circleRadius
var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(windowWidth, windowHeight);

    circleDiameter = windowWidth / NUM_CIRCLES;
    circleRadius = circleDiameter / 2;
}

function draw() {
    gVal = windowWidth/mouseX * 255;
    bVal = windowHeight/mouseY* 255;
    rVal = 0

    var isShifted = false;

    var y = height;
    while (y >= 0) {

        var x;

        if (isShifted) {
            x = circleRadius;
        }
        else {
            x = 0;
        }

        while (x <= width) {
            stroke(color(rVal, gVal, bVal));
            fill(color(rVal, gVal, bVal));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
        y = y - circleRadius;
        isShifted = !isShifted
        
        
        
        rVal = (rVal + windowHeight/circleDiameter)
        gVal = (gVal - windowHeight/circleDiameter)
        bVal = (bVal - windowHeight/circleDiameter)
    }
    
}

function keyPressed() {
    if (keyCode === 115 || keyCode === 83) {
        saveCanvas('geometric pattern', 'png')
    }
    return false;
}
if (mouseY) {
    
}