document.addEventListener("DOMContentLoaded", () => {
	const menuToggle = document.getElementById("menu-toggle");
	const menuClose = document.getElementById("menu-close");
	const menu = document.getElementById("menu");

	// Open menu
	menuToggle.addEventListener("click", () => {
		menu.classList.add("active");
		menuToggle.style.display = "none"; // Hide ☰ button
		menuClose.style.display = "block"; // Show ❌ button
	});

	// Close menu
	menuClose.addEventListener("click", () => {
		menu.classList.remove("active");
		menuClose.style.display = "none"; // Hide ❌ button
		menuToggle.style.display = "block"; // Show ☰ button
	});
});
