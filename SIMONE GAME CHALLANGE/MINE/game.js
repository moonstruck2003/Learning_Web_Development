var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

function checkAnswer(currentLevel) {
    // Check if the user click matches the game pattern
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("passed");

        // If the user completed the sequence, move to the next level
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("failed");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        // You can add failure logic here (like playing a "wrong" sound, flashing the screen, etc.)
    }
}

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {
    var userChosenColour = this.getAttribute("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    // Check the last answer the user pressed
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);

    // Generate a new random color and add it to the game pattern
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Animate the random chosen button
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    // Clear the user's pattern for the next round
    userClickedPattern = [];
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
