document.querySelectorAll("button.drum").forEach(element => {
    element.addEventListener("click", function(event) {
        makeSound(element.innerHTML);
    });
});

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});



function makeSound(key) {
    let audio;
    switch(key) {
        case "w": case "m": 
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "a": 
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "s": 
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "d": 
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "j": 
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "k": 
            audio = new Audio("sounds/snare.mp3");
            break;
        case "l": 
            audio = new Audio("sounds/crash.mp3");
            break;
        default: 
            console.log("Warning: Not a valid keypress for " + key)
            break;
    }
    
    if(typeof audio !== "undefined") {
        audio.play();
        buttonAnimation(key);
    }
}

function buttonAnimation(currentKey) {
    let button = document.querySelector("." + currentKey);
    button.classList.add("pressed"); 
    setTimeout(function() {
        button.classList.remove("pressed");
    }, 100);
}
















