// Portfolio-card data
const portfolioCards = [
	// Web
	{
		category: "web",
		open: "web-1",
		image: "./assets/img/portfolio-1.jpg",
		tag: "Web Development",
		title: "JetMotors Autos",
	},
	{
		category: "web",
		open: "web-2",
		image: "./assets/img/portfolio-2.jpg",
		tag: "Web Development",
		title: "Iconic Homes",
	},
	{
		category: "web",
		open: "web-3",
		image: "./assets/img/portfolio-3.jpg",
		tag: "Web Development",
		title: "SmartContent-AI",
	},
	// App
	{
		category: "app",
		open: "app-1",
		image: "./assets/img/portfolio-4.jpg",
		tag: "App Design",
		title: "Fitness App",
	},
	{
		category: "app",
		open: "app-2",
		image: "./assets/img/portfolio-5.jpg",
		tag: "App Design",
		title: "SmartEat App",
	},
	{
		category: "app",
		open: "app-3",
		image: "./assets/img/portfolio-6.jpg",
		tag: "App Design",
		title: "SmartRide App",
	},
	// UI/UX
	{
		category: "ui",
		open: "ui-1",
		image: "./assets/img/portfolio-7.jpg",
		tag: "UI/UX",
		title: "Dashboard UI",
	},
	{
		category: "ui",
		open: "ui-2",
		image: "./assets/img/portfolio-8.jpg",
		tag: "UI/UX",
		title: "PayBill UI",
	},
];

const portfolioGrid = document.getElementById("portfolio-grid");

portfolioCards.forEach((card) => {
	return (portfolioGrid.innerHTML += `
    <div class="portfolio-card" data-item="${card.category}" data-open="${card.open}">
      <div class="card-body">
        <img src="${card.image}" alt="portfolio-icon" />
        <div class="card-popup-box">
          <div>${card.tag}</div>
          <h3>${card.title}</h3>
        </div>
      </div>
    </div>`);
});

// Pop-up Modal Data
