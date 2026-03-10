(function(){

"use strict";

console.log("reading.js");

/* ---------------- OVERLAY ELEMENTS ---------------- */

const overlay = document.querySelector("#avatarOverlay");
const confirmBtn = document.querySelector("#confirmSelection");

const p1AvatarPreview = document.querySelector("#p1Avatar");
const p2AvatarPreview = document.querySelector("#p2Avatar");

const p1Left = document.querySelector("#p1Left");
const p1Right = document.querySelector("#p1Right");

const p2Left = document.querySelector("#p2Left");
const p2Right = document.querySelector("#p2Right");

/* ---------------- GAME INTERFACE ---------------- */

const gameArea = document.querySelector("#game");

const rollBtn = document.querySelector("#roll");
const passBtn = document.querySelector("#pass");

const scoreP1 = document.querySelector("#scoreP1");
const scoreP2 = document.querySelector("#scoreP2");

const avatarP1 = document.querySelector("#player1Avatar");
const avatarP2 = document.querySelector("#player2Avatar");

const titleMessage = document.querySelector(".title");

/* ---------------- AVATAR OPTIONS ---------------- */

const penguins = [
"images/penguinChef.svg",
"images/penguinBarista.svg",
"images/penguinMagician.svg",
"images/penguinSailor.svg"
];

let p1Index = 0;
let p2Index = 1;

/* ---------------- UPDATE AVATAR PREVIEW ---------------- */

function updateAvatar(player){

if(player === 1){
p1AvatarPreview.src = penguins[p1Index];
}

if(player === 2){
p2AvatarPreview.src = penguins[p2Index];
}

}

/* ---------------- AVATAR ARROWS ---------------- */

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

/* ---------------- GAME DATA ---------------- */

const gameData = {

dice:[
"dice1.svg",
"dice2.svg",
"dice3.svg",
"dice4.svg",
"dice5.svg",
"dice6.svg"
],

players:["Player 1","Player 2"],

score:[0,0],

roll1:0,
roll2:0,
rollSum:0,

index:0,

gameEnd:25

};

/* ---------------- START GAME AFTER CONFIRM ---------------- */

confirmBtn.addEventListener("click", function(){

avatarP1.innerHTML = `<img src="${penguins[p1Index]}" width="150">`;
avatarP2.innerHTML = `<img src="${penguins[p2Index]}" width="150">`;

overlay.style.display = "none";

gameData.index = Math.round(Math.random());

titleMessage.textContent = `${gameData.players[gameData.index]}'s Turn - Roll the Ice!`;

updateScores();

});

/* ---------------- ROLL BUTTON ---------------- */

rollBtn.addEventListener("click", function(){

throwDice();

});

/* ---------------- PASS BUTTON ---------------- */

passBtn.addEventListener("click", function(){

switchPlayer();

});

/* ---------------- THROW DICE ---------------- */

function throwDice(){

gameData.roll1 = Math.floor(Math.random()*6)+1;
gameData.roll2 = Math.floor(Math.random()*6)+1;

gameData.rollSum = gameData.roll1 + gameData.roll2;

gameArea.innerHTML = `
<img src="images/${gameData.dice[gameData.roll1-1]}" width="80">
<img src="images/${gameData.dice[gameData.roll2-1]}" width="80">
`;

/* snake eyes */

if(gameData.rollSum === 2){

titleMessage.textContent = "Oh no you broke the ice! Score reset!";

gameData.score[gameData.index] = 0;

updateScores();

setTimeout(function(){
switchPlayer();
},1500);

}

/* rolled a 1 */

else if(gameData.roll1 === 1 || gameData.roll2 === 1){

titleMessage.textContent = "Rolled a 1! Next Turn!";

setTimeout(function(){
switchPlayer();
},1500);

}

/* normal roll */

else{

gameData.score[gameData.index] += gameData.rollSum;

updateScores();

checkWinner();

}

}

/* ---------------- SWITCH PLAYER ---------------- */

function switchPlayer(){

gameData.index = gameData.index === 0 ? 1 : 0;

titleMessage.textContent = `${gameData.players[gameData.index]}'s Turn - Roll the Ice!`;

}

/* ---------------- UPDATE SCORES ---------------- */

function updateScores(){

scoreP1.textContent = `Score: ${gameData.score[0]}`;
scoreP2.textContent = `Score: ${gameData.score[1]}`;

}

/* ---------------- WIN CONDITION ---------------- */

function checkWinner(){

if(gameData.score[gameData.index] >= gameData.gameEnd){

titleMessage.textContent = `${gameData.players[gameData.index]} Wins!`;

rollBtn.disabled = true;
passBtn.disabled = true;

}

}

})();