const images = [
    "download (1).jpeg",
    "download (2).jpeg",
    "download (3).jpeg",
    "download.jpeg"
];

let currentIndex = 0;

const currentImage = document.getElementById("current-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateImage() {
    currentImage.src = images[currentIndex];
    currentImage.alt = `Gallery Image ${currentIndex + 1}`;
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

// Initialize the gallery
updateImage();
