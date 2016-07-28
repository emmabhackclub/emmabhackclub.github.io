//random fact
var factNum;
factNum = Math.floor(Math.random()*7)
var fact = ["This sentence has five words.", "You're looking at a website.", "You have eyes.", "You're not sleeping.", "The earth's core is beneath you RIGHT NOW", "Look! It's words.", "This fact was chosen randomly."];
document.getElementById("randomFact").innerHTML = ("Your random fact: " + fact[factNum] + "<br></br>");

$(document).on("click", function () {factNum = Math.floor(Math.random()*7);
    document.getElementById("randomFact").innerHTML = ("Your random fact: " + fact[factNum] + "<br></br>");
});

//date
var minutes;
if (new Date().getMinutes() < 10) {
    minutes = "0" + new Date().getMinutes();
} else {
    minutes = new Date().getMinutes()
}
document.getElementById("time").innerHTML = "It's " + new Date().getHours() + ":" + minutes + " somewhere. That somewhere is here." + "<br></br>";

//button
$("#button").on("click", buttonClick);
function buttonClick() {
    alert("You just clicked a button!");
}