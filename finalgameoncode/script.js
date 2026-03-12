(function(){

"use strict";

console.log("reading.js");

// Sounds
const clickSound = new Audio("sounds/icesound.mp3");
const winSound = new Audio("sounds/winsound.mp3");

clickSound.volume = 1;
winSound.volume = 1;

// Overlay

const overlay = document.querySelector("#avatarOverlay");
const confirmBtn = document.querySelector("#confirmSelection");

const p1AvatarPreview = document.querySelector("#p1Avatar");
const p2AvatarPreview = document.querySelector("#p2Avatar");

const p1Left = document.querySelector("#p1Left");
const p1Right = document.querySelector("#p1Right");

const p2Left = document.querySelector("#p2Left");
const p2Right = document.querySelector("#p2Right");

const p1Name = document.querySelector("#p1Name");
const p2Name = document.querySelector("#p2Name");


// Game UI

const gameArea = document.querySelector("#game");
const rollBtn = document.querySelector("#roll");
const passBtn = document.querySelector("#pass");
const newGameBtn = document.querySelector("#newGame");

const scoreP1 = document.querySelector("#scoreP1");
const scoreP2 = document.querySelector("#scoreP2");

const avatarP1 = document.querySelector("#player1Avatar");
const avatarP2 = document.querySelector("#player2Avatar");

const titleMessage = document.querySelector(".title");


// Penguin Avatars

const penguins = ["images/penguinChef.svg","images/penguinBarista.svg","images/penguinMagician.svg","images/penguinSailor.svg"];

const penguinNames = ["Chef","Barista","Magician","Sailor"];

let p1Index = 0;
let p2Index = 1;


// Changing the Avatar

function updateAvatar(player){
    if(player === 1){
        p1AvatarPreview.src = penguins[p1Index];
        p1Name.textContent = penguinNames[p1Index];
    }
    if(player === 2){
        p2AvatarPreview.src = penguins[p2Index];
        p2Name.textContent = penguinNames[p2Index];
    }

}

// Arrows changing the avatar

p1Left.addEventListener("click", function(){
    p1Index = (p1Index - 1 + penguins.length) % penguins.length;
    updateAvatar(1);

});

p1Right.addEventListener("click", function(){
    p1Index = (p1Index + 1) % penguins.length;
    updateAvatar(1);

});

p2Left.addEventListener("click", function(){
    p2Index = (p2Index - 1 + penguins.length) % penguins.length;
    updateAvatar(2);

});

p2Right.addEventListener("click", function(){
    p2Index = (p2Index + 1) % penguins.length;
    updateAvatar(2);

});

// Game data with the dice images

const gameData = {

dice:["dice1.svg","dice2.svg","dice3.svg","dice4.svg","dice5.svg","dice6.svg"],

players:["Player 1","Player 2"],

score:[0,0],

roll1:0,
roll2:0,
rollSum:0,
index:0,
gameEnd:25

};

// Game Start after overlay

confirmBtn.addEventListener("click", function(){
    avatarP1.innerHTML = `<img src="${penguins[p1Index]}" width="150">`;
    avatarP2.innerHTML = `<img src="${penguins[p2Index]}" width="150">`;
    overlay.style.display = "none";
    gameData.index = Math.round(Math.random());
    titleMessage.textContent = `${gameData.players[gameData.index]}'s Turn - Roll the Ice!`;
    updateScores();

});

// Roll Button

rollBtn.addEventListener("click", function(){
    clickSound.currentTime = 0;
    clickSound.play();
    throwDice();

});

// Pass Button

passBtn.addEventListener("click", function(){
    clickSound.currentTime = 0;
    clickSound.play();
    switchPlayer();

});

// Throwing the Dice

function throwDice(){

    gameData.roll1 = Math.floor(Math.random()*6) + 1;
    gameData.roll2 = Math.floor(Math.random()*6) + 1;

    gameData.rollSum = gameData.roll1 + gameData.roll2;

    gameArea.innerHTML =`<img src="images/${gameData.dice[gameData.roll1-1]}" width="80"> <img src="images/${gameData.dice[gameData.roll2-1]}" width="80">`;


    // Snake Eyes (Breaking Ice)

    if(gameData.rollSum === 2){

        titleMessage.textContent = `Oh no ${gameData.players[gameData.index]} broke the ice! Score reset!`;
        gameData.score[gameData.index] = 0;
        updateScores();
        setTimeout(function(){
            switchPlayer();
        },2000);
    }


    // If player rolls a 1

    else if(gameData.roll1 === 1 || gameData.roll2 === 1){
        titleMessage.textContent =
        `Oops ${gameData.players[gameData.index]} rolled a 1! Next Turn!`;
        setTimeout(function(){
            switchPlayer();
        },2000);
    }
    // Normal Dice Roll

    else{
        gameData.score[gameData.index] += gameData.rollSum;
        updateScores();
        checkWinner();
    }

}
// Switching Players

function switchPlayer(){
    gameData.index = gameData.index === 0 ? 1 : 0;
    titleMessage.textContent =
    `${gameData.players[gameData.index]}'s Turn - Roll the Ice!`;
}

// Updating the score

function updateScores(){
    scoreP1.textContent = `Score: ${gameData.score[0]}`;
    scoreP2.textContent = `Score: ${gameData.score[1]}`;
}

// Winning Condition

function checkWinner(){
    if(gameData.score[gameData.index] === gameData.gameEnd || gameData.score[gameData.index] > gameData.gameEnd){
        titleMessage.textContent =`Amazing! ${gameData.players[gameData.index]} Wins!`;
        winSound.currentTime = 0;
        winSound.play();
        rollBtn.disabled = true;
        passBtn.disabled = true;
        newGameBtn.style.display = "inline-block";
    }

}

// Start a new game

newGameBtn.addEventListener("click", function(){
    location.reload();

});

})();