function roll(){
    var side = Math.ceil(Math.random()*6)
    $("#diceface").attr("src", "d" + (side) + ".gif");
    console.log(side)
}
$("#diceface").on("click", roll);

$(document).keypress(numberpress);

function numberpress(event) {
    if ((event.charCode) > 48 & (event.charCode) < 55) {
        $("#diceface").attr("src", "d" + (event.charCode - 48) + ".gif");
    }
}