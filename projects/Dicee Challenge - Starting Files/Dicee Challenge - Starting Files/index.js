let randomNumber1 = Math.ceil(Math.random() * 6)
let randomNumber2 = Math.ceil(Math.random() * 6)
document.querySelector(".dice img#ldie").setAttribute("src", "images/dice" + String(randomNumber1) + ".png");
document.querySelector(".dice img#rdie").setAttribute("src", "images/dice" + String(randomNumber2) + ".png");

let winner;

if (randomNumber1 > randomNumber2) {
    winner = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    winner = "Player 2 wins!";
} else {
    winner = "Tie! Roll again!";
}

document.querySelector(".container h1").textContent = String(winner);