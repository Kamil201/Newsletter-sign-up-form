const formEl = document.querySelector(".newsletter__form__control");
const errorMessageEl = document.querySelector(".newsletter__error__message");
const emailInputEl = document.querySelector("#email");

const popupEl = document.querySelector(".newsletter__popup__success");

const confirmationEmailEl = document.querySelector(".newsletter__email");

const dismissBtnEl = document.querySelector(".newsletter__dismiss__btn");
const newsletterContainerEl = document.querySelector(".newsletter__container");

function isValidEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

function formSubmit(e) {
	e.preventDefault();
	const email = emailInputEl.value.trim();
	if (isValidEmail(email)) {
		errorMessageEl.style.visibility = "hidden";
		confirmationEmailEl.textContent = email;
		popupEl.style.display = "block";
		newsletterContainerEl.style.display = "none";
	} else {
		errorMessageEl.style.visibility = "visible";
		formEl.classList.add("error");
		popupEl.style.display = "none";
	}
}

dismissBtnEl.addEventListener("click", function () {
	popupEl.style.display = "none";
	newsletterContainerEl.style.display = "flex";
});

formEl.addEventListener("submit", formSubmit);
