function roll(){
    var side = Math.ceil(Math.random()*6)
    $("#diceface").attr("src", "d" + (side) + ".gif");
    console.log(side)
}
$("#diceface").on("click", roll);