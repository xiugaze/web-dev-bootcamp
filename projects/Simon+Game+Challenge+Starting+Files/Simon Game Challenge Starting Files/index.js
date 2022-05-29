
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
main();


function nextSequence() {
    let rand = Math.floor(Math.random() * 4);
    let chosenColor = buttonColors[rand];
    gamePattern.push(chosenColor);
    gamePattern.forEach(e => {
        playSound(e);
    });
    return rand;
}

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function main() {


    $(".btn").on("click", function(e) {
        let userColor = e.target.id;
        playSound(userColor);
        userClickedPattern.push(userColor);
        console.log(userClickedPattern);
    });


    // $("#" + chosenColor).fadeOut(85).fadeIn(75);

}


