const mainImage = document.querySelector("#mainImage");
const hoverZones = document.querySelectorAll(".hover-zone");
const outlines = document.querySelectorAll(".outline");
const overlay = document.querySelector("#pictureoverlayorange");
const closeButton = document.querySelector("#closeButton");

for (let i = 0; i < hoverZones.length; i++) {

  hoverZones[i].addEventListener("mouseenter", function() {

    // Hide all outlines
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

// Click overlay (orange)
hoverZones[0].addEventListener("click", function() {
  overlay.style.display = "flex";
});

// Close overlay
closeButton.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.style.display = "none";
});