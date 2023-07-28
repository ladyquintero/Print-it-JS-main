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



// Add event listeners to the arrows
leftArrow.addEventListener('click', () => {
    // Your left arrow click logic here
    alert('Left arrow clicked!');
    // or use alert() for a pop-up message
    // alert('Left arrow clicked!');

});

rightArrow.addEventListener('click', () => {
    // Your right arrow click logic here
    alert('Right arrow clicked!');
    // or use alert() for a pop-up message
    // alert('Right arrow clicked!');
});

