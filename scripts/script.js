// scripts/yourExistingScript.js

const currentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = `© ${currentYear} Corey Birnie`;

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".profile-pic");
    const zoomOverlay = document.createElement("div");
    const zoomedImage = document.createElement("img");

    zoomOverlay.className = 'zoom-overlay';
    zoomOverlay.appendChild(zoomedImage);
    document.body.appendChild(zoomOverlay);

    images.forEach(image => {
        image.addEventListener("click", () => {
            zoomedImage.src = image.src;
            zoomOverlay.style.display = "flex";
        });
    });

    zoomOverlay.addEventListener("click", () => {
        zoomOverlay.style.display = "none";
    });
});
