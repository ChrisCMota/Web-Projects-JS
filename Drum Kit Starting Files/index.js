var drumAudios = [
    new Audio("sounds/tom-1.mp3"),
    new Audio("sounds/tom-2.mp3"),
    new Audio("sounds/tom-3.mp3"),
    new Audio("sounds/tom-4.mp3"),
    new Audio("sounds/snare.mp3"),
    new Audio("sounds/crash.mp3"),
    new Audio("sounds/kick-bass.mp3")
];

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
       makeSound(this.innerHTML);
       animatedButton(this.innerHTML);
    });
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.addEventListener("keydown", function (event) {
        makeSound(event.key);
        animatedButton(event.key);
    });
}


function makeSound(key) {
    switch (key) {
        case "w":
            drumAudios[0].play();
            break;
        case "a":
            drumAudios[1].play();
            break;
        case "s":
            drumAudios[2].play();
            break;
        case "d":
            drumAudios[3].play();
            break;
        case "j":
            drumAudios[4].play();
            break;
        case "k":
            drumAudios[5].play();
            break;
        case "l":
            drumAudios[6].play();
            break;
        default: drumAudios[0].play();
            break;
    }
}

function animatedButton(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
    
}
