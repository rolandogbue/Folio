const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "open";
const active = "active";

const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-Visible";

const root = document.documentElement;

// Theme
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

// Modal
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const setActive = (element, selector) => {
	if (document.querySelector(`${selector}.${active}`) !== null) {
		document.querySelector(`${selector}.${active}`).classList.remove(active);
	}
	element.classList.add(active);
};

const setTheme = (val) => {
	if (val === dark) {
		root.setAttribute(dataTheme, dark);
		localStorage.setItem(theme, dark);
	} else {
		root.setAttribute(dataTheme, light);
		localStorage.setItem(theme, light);
	}
};

if (currentTheme) {
	root.setAttribute(dataTheme, currentTheme);
	switcher.forEach((btn) => {
		btn.classList.remove(active);
	});
}

if (currentTheme === dark) {
	switcher[1].classList.add(active);
} else {
	switcher[0].classList.add(active);
}

toggleTheme.addEventListener("click", function () {
	const tab = this.parentElement.parentElement;
	if (!tab.className.includes(open)) {
		tab.classList.add(open);
	} else {
		tab.classList.remove(open);
	}
});

for (const element of switcher) {
	element.addEventListener("click", function () {
		const toggle = this.dataset.toggle;
		setActive(element, switcherBtn);
		setTheme(toggle);
	});
}

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
