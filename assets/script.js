const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


/// Get the arrow elements
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

// Function to generate the dots dynamically
function createDots(numberOfDots) {
  for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
  }
}

// Add event listeners to the arrows
leftArrow.addEventListener('click', () => {
    // Your left arrow click logic here
    alert('Left arrow clicked!');
    // or use alert() for a pop-up message
    // alert('Left arrow clicked!');

    // Add logic to switch the selected dot
    const selectedDot = document.querySelector('.dot_selected');
    if (selectedDot) {
      const previousDot = selectedDot.previousElementSibling || dotsContainer.lastElementChild;
      selectedDot.classList.remove('dot_selected');
      previousDot.classList.add('dot_selected');
    }
});

rightArrow.addEventListener('click', () => {
    // Your right arrow click logic here
    alert('Right arrow clicked!');
    // or use alert() for a pop-up message
    // alert('Right arrow clicked!');

    // Add logic to switch the selected dot
    const selectedDot = document.querySelector('.dot_selected');
    if (selectedDot) {
      const nextDot = selectedDot.nextElementSibling || dotsContainer.firstElementChild;
      selectedDot.classList.remove('dot_selected');
      nextDot.classList.add('dot_selected');
    }
});

// Call the createDots function to generate the dots dynamically
const numberOfSlides = 4; // Set the number of slides to 4
createDots(numberOfSlides);