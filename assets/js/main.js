const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-Visible";

const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

// Full Site Modal "open buttons"
for (const element of openModal) {
	element.addEventListener("click", function () {
		const modalId = this.dataset.open;
		document.getElementById(modalId).classList.add(isVisible);
	});
}

for (const element of closeModal) {
	element.addEventListener("click", function () {
		this.parentElement.parentElement.classList.remove(isVisible);
	});
}
s