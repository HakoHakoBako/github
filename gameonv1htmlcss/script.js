(function(){

"use strict";

console.log("reading JS");

/* ---------------- AVATAR SELECTOR ---------------- */

const overlay = document.querySelector("#avatarOverlay");
const startButton = document.querySelector("#confirmSelection");

const p1Avatar = document.querySelector("#p1Avatar");
const p2Avatar = document.querySelector("#p2Avatar");

const avatarNames = document.querySelectorAll(".avatar-name");

/* penguin avatars */

const penguins = [
{img:"images/penguinMagician.svg", name:"Magician"},
{img:"images/penguinBarista.svg", name:"Barista"},
{img:"images/penguinChef.svg", name:"Chef"},
{img:"images/penguinSailor.svg", name:"Sailor"}
];

let p1Index = 0;
let p2Index = 1;

/* arrow buttons */

const p1Left = document.querySelectorAll(".avatar-picker")[0].querySelector(".left");
const p1Right = document.querySelectorAll(".avatar-picker")[0].querySelector(".right");

const p2Left = document.querySelectorAll(".avatar-picker")[1].querySelector(".left");
const p2Right = document.querySelectorAll(".avatar-picker")[1].querySelector(".right");

/* PLAYER 1 arrows */

p1Left.onclick = function(){
p1Index = (p1Index - 1 + penguins.length) % penguins.length;
updateAvatar(1);
};

p1Right.onclick = function(){
p1Index = (p1Index + 1) % penguins.length;
updateAvatar(1);
};

/* PLAYER 2 arrows */

p2Left.onclick = function(){
p2Index = (p2Index - 1 + penguins.length) % penguins.length;
updateAvatar(2);
};

p2Right.onclick = function(){
p2Index = (p2Index + 1) % penguins.length;
updateAvatar(2);
};

/* update avatar preview */

function updateAvatar(player){

if(player === 1){
p1Avatar.src = penguins[p1Index].img;
avatarNames[0].textContent = penguins[p1Index].name;
}

if(player === 2){
p2Avatar.src = penguins[p2Index].img;
avatarNames[1].textContent = penguins[p2Index].name;
}

}

/* ---------------- GAME VARIABLES ---------------- */

const gameControl = document.querySelector('#gamecontrol');
const game = document.querySelector('#game');
const score = document.querySelector('#score');
const actionArea = document.querySelector('#actions');

const gameData = {
dice:[
'dice1.svg',
'dice2.svg',
'dice3.svg',
'dice4.svg',
'dice5.svg',
'dice6.svg'
],
players:['Player 1','Player 2'],
score:[0,0],
roll1:0,
roll2:0,
rollSum:0,
index:0,
gameEnd:25
};

/* ---------------- START GAME ---------------- */

startButton.addEventListener("click", function(){

/* place avatars into the game UI */

document.querySelector("#player1Avatar").innerHTML =
`<img src="${penguins[p1Index].img}" width="120">`;

document.querySelector("#player2Avatar").innerHTML =
`<img src="${penguins[p2Index].img}" width="120">`;

/* hide avatar overlay */

overlay.style.display = "none";

/* choose starting player */

gameData.index = Math.round(Math.random());

/* show game start UI */

gameControl.innerHTML = "<h2>The Game Has Started</h2>";
gameControl.innerHTML += '<button id="quit">Quit Game</button>';

document.querySelector('#quit').addEventListener("click", function(){
location.reload();
});

/* start first turn */

setUpTurn();

});

/* ---------------- GAME FUNCTIONS ---------------- */

function setUpTurn(){

game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;

actionArea.innerHTML = '<button id="roll">Roll Dice</button>';

document.querySelector("#roll").addEventListener("click", function(){
throwDice();
});

}

/* roll dice */

function throwDice(){

gameData.roll1 = Math.floor(Math.random()*6)+1;
gameData.roll2 = Math.floor(Math.random()*6)+1;

game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;

game.innerHTML += `
<img src="images/${gameData.dice[gameData.roll1-1]}" width="80">
<img src="images/${gameData.dice[gameData.roll2-1]}" width="80">
`;

gameData.rollSum = gameData.roll1 + gameData.roll2;

/* snake eyes */

if(gameData.rollSum === 2){

game.innerHTML += "<p>Snake Eyes! Score reset.</p>";

gameData.score[gameData.index] = 0;

gameData.index ? gameData.index = 0 : gameData.index = 1;

showCurrentScore();

setTimeout(setUpTurn,2000);

}

/* one die = 1 */

else if(gameData.roll1 === 1 || gameData.roll2 === 1){

gameData.index ? gameData.index = 0 : gameData.index = 1;

game.innerHTML += `<p>Rolled a 1! Switching to ${gameData.players[gameData.index]}</p>`;

setTimeout(setUpTurn,2000);

}

/* normal roll */

else{

gameData.score[gameData.index] += gameData.rollSum;

actionArea.innerHTML =
'<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';

document.querySelector('#rollagain').addEventListener("click", function(){
throwDice();
});

document.querySelector('#pass').addEventListener("click", function(){
gameData.index ? gameData.index = 0 : gameData.index = 1;
setUpTurn();
});

checkWinningCondition();

}

}

/* check winner */

function checkWinningCondition(){

if(gameData.score[gameData.index] >= gameData.gameEnd){

score.innerHTML =
`<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

actionArea.innerHTML = "";

document.querySelector('#quit').innerHTML = "Start New Game";

}

else{

showCurrentScore();

}

}

/* display score */

function showCurrentScore(){

score.innerHTML =
`<p>Score: <strong>${gameData.players[0]} ${gameData.score[0]}</strong>
 | <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;

}

})();