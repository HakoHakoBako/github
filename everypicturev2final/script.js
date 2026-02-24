const hoverZones = document.querySelectorAll(".hover-zone");
const outlines = document.querySelectorAll(".outline");
const overlays = document.querySelectorAll(".overlay");
const closeButtons = document.querySelectorAll(".closeOverlay");
const mainImage = document.querySelector("#mainImage");

// hovers

for (let i = 0; i < hoverZones.length; i++) {

    hoverZones[i].addEventListener("mouseenter", function () {
        outlines[i].style.opacity = 1;
    });

    hoverZones[i].addEventListener("mouseleave", function () {
        outlines[i].style.opacity = 0;
    });

}


// open overlay

for (let i = 0; i < hoverZones.length; i++) {

    hoverZones[i].addEventListener("click", function () {

        const overlayId = hoverZones[i].getAttribute("data-overlay");
        const overlay = document.getElementById(overlayId);

        overlay.style.display = "flex";
        mainImage.style.opacity = 0.3;

    });

}


// close overlay

for (let i = 0; i < closeButtons.length; i++) {

    closeButtons[i].addEventListener("click", function () {

        for (let j = 0; j < overlays.length; j++) {
            overlays[j].style.display = "none";
        }

        mainImage.style.opacity = 1;

        for (let k = 0; k < outlines.length; k++) {
            outlines[k].style.opacity = 0;
        }

    });

}