const copyrightYearEl = document.getElementById("copyright-year");
copyrightYearEl.innerText = new Date().getFullYear();

function closeLightbox() {
	const lightboxEl = document.getElementById("lightbox");
	lightboxEl.style.display = "none";
	document.body.classList.remove("noscroll");
}

let lightboxImages = [];
let lightboxIndex = 0;

/**
 * @param {Array<string>} inputImages
 */
function openLightbox(inputImages, shift = 0) {
	if (!Array.isArray(inputImages) || inputImages.length === 0) {
		return;
	}

	// Clone array to work on copy.
	const images = inputImages.slice();
	for (let i = 0; i < shift; i++) {
		const popped = images.shift();
		images.push(popped);
	}

	const lightboxEl = document.getElementById("lightbox");
	lightboxEl.style.display = "block";
	document.body.classList.add("noscroll");

	lightboxImages = images;
	lightboxIndex = 0;
	navigateLightbox(0);
}

function navigateLightbox(delta) {
	const lightboxImgContainerEl = document.getElementById(
		"lightbox-img-container"
	);
	lightboxImgContainerEl.innerHTML = "";

	lightboxIndex += delta;
	if (lightboxIndex >= lightboxImages.length) {
		lightboxIndex = 0;
	} else if (lightboxIndex < 0) {
		lightboxIndex = lightboxImages.length - 1;
	}

	const imageUrl = lightboxImages[lightboxIndex];
	const imgEl = document.createElement("img");
	imgEl.className = "lightbox-img";
	imgEl.src = "img/portfolio/" + imageUrl;
	lightboxImgContainerEl.appendChild(imgEl);
}

function addPortfolioPreviewImages(images) {
	const portfolioPreviewContainerEl = document.getElementById(
		"portfolio-preview-container"
	);

	let i = 0;
	for (const imageUrl of images) {
		const imgEl = document.createElement("img");
		imgEl.className = "portfolio-preview-img";
		imgEl.src = "img/portfolio/" + imageUrl;
		const j = i;
		imgEl.onclick = () => openLightbox(images, j);
		portfolioPreviewContainerEl.appendChild(imgEl);

		i++;
	}
}

addPortfolioPreviewImages([
	"001.jpg",
	"002.jpg",
	"003.jpg",
	"004.jpg",
	"005.jpg",
	"006.jpg",
	"007.jpg",
	"008.jpg",
	"009.jpg",
	"010.jpg",
	"011.jpg",
	"012.jpg",
]);
