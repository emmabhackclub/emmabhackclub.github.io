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

function setup() {
    var canvas = createCanvas(400, 400);
    background(255);
    fill(0);
    pointsData.on("child_added", function (point) {
        points.push(point.val());
    });
    
    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(function () {
        if (mouseIsPressed) {
            drawPoint();
        }
    });
}
function draw() {
    background(255);
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        ellipse(point.x, point.y, 5, 5);
    }
}

function drawPoint() {
    pointsData.push({x : mouseX, y : mouseY});
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
    saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
    pointsData.remove();
    points = [];
}
pointsData.on("child_removed", function () {
        points = [];
    });