const mainImage = document.getElementById("mainImage");
const hoverZones = document.querySelectorAll(".hover-zone");
const outlines = document.querySelectorAll(".outline");
const overlay = document.getElementById("pictureoverlayorange");
const closeButton = document.getElementById("closeButton");

// Hide all outlines
function resetOutlines() {
  for (let i = 0; i < outlines.length; i++) {
    outlines[i].style.opacity = 0;
  }
}

// Loop through hover zones
for (let i = 0; i < hoverZones.length; i++) {

  hoverZones[i].addEventListener("mouseenter", function() {
    resetOutlines();
    mainImage.style.opacity = 0;
    outlines[i].style.opacity = 1;
  });

  hoverZones[i].addEventListener("mouseleave", function() {
    resetOutlines();
    mainImage.style.opacity = 1;
  });

}

// Click overlay (add the other hover zones later)
hoverZones[0].addEventListener("click", function() {
  overlay.style.display = "flex";
});

// Close overlay
closeButton.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.style.display = "none";
});