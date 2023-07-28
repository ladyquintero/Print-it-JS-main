document.addEventListener('DOMContentLoaded', () => {

	const slides = [
	  {
		  "image": "slide1.jpg",
		  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	  },
	  {
		  "image": "slide2.jpg",
		  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	  },
	  {
		  "image": "slide3.jpg",
		  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	  },
	  {
		  "image": "slide4.png",
		  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	  }
	];
  
	const bannerImage = document.querySelector('.banner-img');
	const bannerTagline = document.querySelector('#banner p');
	const dotsContainer = document.querySelector('.dots');
	// Arrows
	const leftArrow = document.querySelector('.arrow_left');
	const rightArrow = document.querySelector('.arrow_right');
  
	// Function to generate the dots dynamically
	function createDots(numberOfDots) {
		for (let i = 0; i < numberOfDots; i++) {
			const dot = document.createElement('div');
			dot.classList.add('dot');
			dotsContainer.appendChild(dot);
		}
	}
  
	leftArrow.addEventListener('click', () => {
		console.log('Left arrow clicked!');

	rightArrow.addEventListener('click', () => {
		console.log('Right arrow clicked!');
		
		// Add logic to switch the selected dot
		const selectedDot = document.querySelector('.dot_selected');
		if (selectedDot) {
			const previousDot = selectedDot.previousElementSibling || dotsContainer.lastElementChild;
			selectedDot.classList.remove('dot_selected');
			previousDot.classList.add('dot_selected');
		}
	});
  


		// Add logic to switch the selected dot
		const selectedDot = document.querySelector('.dot_selected');
		if (selectedDot) {
			const nextDot = selectedDot.nextElementSibling || dotsContainer.firstElementChild;
			selectedDot.classList.remove('dot_selected');
			nextDot.classList.add('dot_selected');
		}
	});
  
	// Call the createDots function to generate the dots dynamically
	const numberOfSlides = slides.length;
	createDots(numberOfSlides);
  
	// Function to display slide content based on the current slide index
	function showSlide(slideIndex) {
		if (slideIndex >= 0 && slideIndex < slides.length) {
			bannerImage.src = './assets/images/slideshow/' + slides[slideIndex].image;
			bannerTagline.innerHTML = slides[slideIndex].tagLine;
		}
	}
  
	// Initial display of the first slide
	showSlide(0);
  
	// Now, you can add event listeners to the dots
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			// Show the selected slide when a dot is clicked
			showSlide(index);
  
			// Update the selected dot styling
			const selectedDot = document.querySelector('.dot_selected');
			if (selectedDot) {
				selectedDot.classList.remove('dot_selected');
			}
			dot.classList.add('dot_selected');
		});
	});
  });