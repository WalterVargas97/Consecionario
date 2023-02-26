// Define the images
const images = [
    "img/background_01.jpg",
    "img/background_02.jpg",
    "img/background_03.jpeg",
];

// App State
let index = 0;
const max = images.length;

// Get the DOM elements

const containerElement = document.querySelector(".container");
const nextSlideButton = document.querySelector(".nextSlide");
const prevSlideButton = document.querySelector(".prevSlide");

/// listen for the click events

prevSlideButton.addEventListener("click", function () {
    index--;
    // Set image Index
    setImageIndex()

    //change Background IMG
    changeBackgroundImage(images[index], containerElement);
    
});
nextSlideButton.addEventListener("click", function () {
    index++;
    // Set image Index
    setImageIndex()

    //change Background IMG
    changeBackgroundImage(images[index], containerElement);
    
});

// Functions
function setImageIndex() {
    if (index < 0) index = max - 1;
    if (index === max ) index = 0;
}

function changeBackgroundImage(backgroundImage, element) {
    element.style.backgroundImage = `url(${backgroundImage})`;
}
