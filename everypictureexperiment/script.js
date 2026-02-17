const mainImage = document.getElementById("mainImage");
const hoverZones = document.querySelectorAll(".hover-zone");
const outlines = document.querySelectorAll(".outline");

hoverZones.forEach((zone, index) => {

  zone.addEventListener("mouseenter", () => {

    // Hide all outlines
    outlines.forEach(outline => {
      outline.style.opacity = 0;
    });

    // Hide main
    mainImage.style.opacity = 0;

    // Show corresponding outline
    outlines[index].style.opacity = 1;
  });

  zone.addEventListener("mouseleave", () => {

    // Hide outlines
    outlines.forEach(outline => {
      outline.style.opacity = 0;
    });

    // Show main again
    mainImage.style.opacity = 1;
  });

});