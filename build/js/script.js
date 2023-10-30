"use strict";

const initApp = () => {
	const yearSpan = document.getElementById("year");
	const hamburgerBtn = document.getElementById("hamburgerButton");
	const mobileMenu = document.getElementById("mobileMenu");
	
	const toggleMenu = () => {
		mobileMenu.classList.toggle("hidden");
		mobileMenu.classList.toggle("flex");
		hamburgerBtn.classList.toggle('toggle-btn');
	};
	
	yearSpan.textContent = new Date().getFullYear();
	hamburgerBtn.addEventListener("click", toggleMenu);
	mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", () => {
	initApp();
});
