'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const box = document.querySelector('.box');
	const slides = document.querySelectorAll('.slide');
	const btnLeft = document.getElementById('left');
	const btnRight = document.getElementById('right');

	let activeSlide = 0;

	btnRight.addEventListener('click', () => {
		activeSlide++;

		activeSlide = activeSlide > slides.length - 1 ? 0 : activeSlide;

		setBackground();
		setActiveSlide();
	});

	btnLeft.addEventListener('click', () => {
		activeSlide--;

		activeSlide = activeSlide < 0 ? slides.length - 1 : activeSlide;

		setBackground();
		setActiveSlide();
	});

	setBackground();

	function setBackground() {
		const bgImages = ["url('images/mountain.png')", "url('images/ocean.png')", "url('images/wind-turbines.png')", "url('images/thunderbolt.png')", "url('images/fire.png')"];

		box.style.backgroundImage = bgImages[activeSlide];
	}

	function setActiveSlide() {
		slides.forEach(slide => slide.classList.remove('active'));

		slides[activeSlide].classList.add('active');
	}
});
