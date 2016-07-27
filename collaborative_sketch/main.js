// // <script src="https://www.gstatic.com/firebasejs/3.2.1/firebase.js"></script>
// //<script>
//   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBcjHV2dexRpW6UDKpSXKSktODPMFCBgRM",
    authDomain: "collaborative-sketch-306be.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-306be.firebaseio.com",
    storageBucket: "collaborative-sketch-306be.appspot.com",
  };
   firebase.initializeApp(config);
//</script>

var pointsData = firebase.database().ref();
var points = [];
var color;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    background(0);
    color = 200;
    noStroke();
    pointsData.on("child_added", function(point) {
        points.push(point.val());
    });
    pointsData.on("child_removed", function() {
        points = [];
    });

    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(function() {
        if (mouseIsPressed) {
            drawPoint();
        }
    });
}
function draw() {
    background(0);
    fill(color);
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        ellipse(point.x, point.y, 5, 5);
    }
    if (keyIsDown(32)) {
        rv = rv + 5;
        if (rv >= 250) {
            rv = 0;
        }
        console.log(color);
        
    }
}

function drawPoint() {
    pointsData.push({x : mouseX, y : mouseY});
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
    saveCanvas();
    console.log("click");
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
       console.log("click");
    pointsData.remove();
    points = [];
}

function keyPressed() {
    if (keyCode == 82) {
        color = "red";
    }
    else if (keyCode == 79) {
        color = "orange";
    }
    else if (keyCode == 89) {
        color = "yellow";
    }
    else if (keyCode == 71) {
        color = "green";
    }
    else if (keyCode == 66) {
        color = "blue";
    }
    else if (keyCode == 80) {
        color = "purple";
    }
    else {
        color = 200;
    }
}