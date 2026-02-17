let mainImage = document.getElementById("mainImage");
let hoverZones = document.querySelectorAll(".hover-zone");
let outlines = document.querySelectorAll(".outline");

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

function resetOutlines() {
  for (let i = 0; i < outlines.length; i++) {
    outlines[i].style.opacity = 0;
  }
}