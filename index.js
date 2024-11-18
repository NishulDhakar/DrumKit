
// Global volume variable
let globalVolume = 1; // Default volume is 1 (max)

// Detecting Button Press
var allButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < allButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var sound = this.innerHTML;

        makeSound(sound);
        buttonAnime(sound);
    });
}

// Detecting Key Press
document.addEventListener("keypress", function (e) {
    makeSound(e.key);
    buttonAnime(e.key);
});

// Play Sound Based on Key
function makeSound(key) {
    let audio;
    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;

        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;

        case "s":
            audio = new Audio("sounds/crash.mp3");
            break;

        case "d":
            audio = new Audio("sounds/kick-bass.mp3");
            break;

        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;

        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;

        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;

        default:
            console.log("Invalid key: " + key);
            return;
    }

    // Set volume before playing
    audio.volume = globalVolume;
    audio.play();
}

// Animate Button Press
function buttonAnime(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

// Setup Volume Control
document.getElementById("volume").addEventListener("input", function (e) {
    globalVolume = parseFloat(e.target.value);
    console.log("Volume set to:", globalVolume); // Debugging info
});
