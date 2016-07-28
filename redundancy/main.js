$("#button").on("click", buttonClick);

var factNum;
factNum = Math.floor(Math.random()*4)
var fact = ["This sentence has five words.", "You're looking at a website.", "You have eyes.", "You're not sleeping."];
document.getElementById("randomFact").innerHTML = ("Your random fact: " + fact[factNum] + "<br></br>");

document.getElementById("time").innerHTML = "It's " + new Date().getHours() + ":" + new Date().getMinutes() + " somewhere. That somewhere is here.";

function buttonClick() {
    alert("You just clicked a button!");
}
$(document).on("click", function () {factNum = Math.floor(Math.random()*4);
    document.getElementById("randomFact").innerHTML = ("Your random fact: " + fact[factNum] + "<br></br>");
});