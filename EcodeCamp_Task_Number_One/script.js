const mobileNav = document.querySelector(".mobile-nav");

const closeIcon = document.querySelector(".mobile-nav span svg");
const mobileNavItems = document.querySelectorAll(".mobile-nav li");
const svgLi = document.querySelector("nav ul li svg");

svgLi.addEventListener("click", () => {
	mobileNav.classList.toggle("open-menu");
	mobileNav.classList.toggle("closed-menu");
});

closeIcon.addEventListener("click", () => {
	mobileNav.classList.toggle("open-menu");
	mobileNav.classList.toggle("closed-menu");
});

mobileNavItems.forEach((item) => {
	item.addEventListener("click", () => {
		mobileNav.classList.toggle("open-menu");
		mobileNav.classList.toggle("closed-menu");
	});
});

document.getElementById("theme-toggle").addEventListener("change", function () {
	if (this.checked) {
		document.body.style.setProperty("--background-odd", "#0f0f0f");
		document.body.style.setProperty("--Light-txt", "#f0f0f0");
		document.body.style.setProperty("--slate-background", "#8e8e8e");
		document.body.style.setProperty("--text", "#f9f9f9");
		document.body.style.setProperty("--hover", " #147efb");
		document.body.style.setProperty("--colori", " #fff");
		document.body.style.setProperty("--background-even", "#090909");
		document.body.style.setProperty("--shadow", "#ffffff1a");
	} else {
		document.body.style.setProperty("--background-odd", "#fff");
		document.body.style.setProperty("--Light-txt", "#767676");
		document.body.style.setProperty("--slate-background", "#8e8e8e");
		document.body.style.setProperty("--text", "#2d2e32");
		document.body.style.setProperty("--hover", "#147efb");
		document.body.style.setProperty("--colori", "#000");
		document.body.style.setProperty("--background-even", "#f9f9f9");
		document.body.style.setProperty("--shadow", "#0000001a");
	}
});

// document
// 	.getElementById("contact-form-button")
// 	.addEventListener("click", function () {
// 		document.querySelectorAll("input").setvalues="";
// 	});

// document
// 	.getElementById("contact-form-button")
// 	.addEventListener("click", function () {
// 		setTimeout(function () {
// 			document.getElementsByClassName("form-input").forEach(function (input) {
// 				input.value = "";
// 			});
// 		}, 100);
// 	});

document
	.getElementById("contact-form-button")
	.addEventListener("click", function (event) {
		// event.preventDefault(); // Prevent the form from submitting immediately

		setTimeout(function () {
		// Clear all input fields
		document.querySelectorAll(".form-input").forEach(function (input) {
			input.value = "";
		});

		// Now submit the form

		}, 100);
	});
