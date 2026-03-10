(function(){

"use strict";

/* overlay and button */

const overlay = document.querySelector("#avatarOverlay");
const startButton = document.querySelector("#confirmSelection");

/* avatar image elements */

const p1Avatar = document.querySelector("#p1Avatar");
const p2Avatar = document.querySelector("#p2Avatar");

/* avatar names */

const avatarNames = document.querySelectorAll(".avatar-name");

/* penguin options */

const penguins = [
    {img:"images/penguinMagician.svg", name:"Magician"},
    {img:"images/penguinBarista.svg", name:"Barista"},
    {img:"images/penguinChef.svg", name:"Chef"},
    {img:"images/penguinSailor.svg", name:"Sailor"}
];

/* indexes */

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

/* update avatar display */

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

/* confirm button */

startButton.addEventListener("click", function(){

    /* place avatars into game area */

    document.querySelector("#player1Avatar").innerHTML =
        `<img src="${penguins[p1Index].img}" width="120">`;

    document.querySelector("#player2Avatar").innerHTML =
        `<img src="${penguins[p2Index].img}" width="120">`;

    /* hide overlay */

    overlay.style.display = "none";

    /* start the game */

    if(typeof startGame === "function"){
        startGame();
    }

});

})();