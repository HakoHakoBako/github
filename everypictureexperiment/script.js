(function() {
"use strict";
console.log("reading js");

/* ======================
   VARIABLES
====================== */

const mainImage = document.querySelector("#mainImage");
const hoverZones = document.querySelectorAll(".hover-zone");
const outlines = document.querySelectorAll(".outline");
const overlay = document.querySelector("#pictureoverlayorange");
const closeButton = document.querySelector(".closeOverlay"); 


/* ======================
   HOVER EFFECT
====================== */

for (let i = 0; i < hoverZones.length; i++) {

    hoverZones[i].addEventListener("mouseenter", function() {

        // Hide all outlines first
        for (let j = 0; j < outlines.length; j++) {
            outlines[j].style.opacity = 0;
        }

        mainImage.style.opacity = 0;
        outlines[i].style.opacity = 1;
    });


    hoverZones[i].addEventListener("mouseleave", function() {

        // Hide all outlines
        for (let j = 0; j < outlines.length; j++) {
            outlines[j].style.opacity = 0;
        }

        mainImage.style.opacity = 1;
    });

}


/* ======================
   OPEN ORANGE OVERLAY
====================== */

if (hoverZones.length > 0 && overlay) {
    hoverZones[0].addEventListener("click", function() {
        overlay.style.display = "flex";
    });
}


/* ======================
   CLOSE OVERLAY
====================== */

if (closeButton && overlay) {
    closeButton.addEventListener("click", function() {
        overlay.style.display = "none";
        mainImage.style.opacity = 1;
    });
}

})();