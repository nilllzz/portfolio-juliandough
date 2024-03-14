/**
 * @type {Array<GalleryImage>}
 */
let lightboxImages = [];
let lightboxIndex = 0;

function closeLightbox() {
	const lightboxEl = document.getElementById("lightbox");
	lightboxEl.style.display = "none";
	document.body.classList.remove("noscroll");

	document.removeEventListener("keydown", onKeyDownLightbox);
}

/**
 * @param {Array<GalleryImage>} inputImages
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

	document.addEventListener("keydown", onKeyDownLightbox);
}

/**
 * @param {KeyboardEvent} e
 */
function onKeyDownLightbox(e) {
	switch (e.key) {
		case "Escape":
			closeLightbox();
			break;
		case "ArrowRight":
			navigateLightbox(1);
			break;
		case "ArrowLeft":
			navigateLightbox(-1);
			break;
	}
}

/**
 * @param {number} delta
 */
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

	const imageUrl = lightboxImages[lightboxIndex].url;
	const imgEl = document.createElement("img");
	imgEl.className = "lightbox-img";
	imgEl.src = "img/portfolio/" + imageUrl;
	imgEl.onclick = () => {
		window.open(imgEl.src).focus();
	};

	lightboxImgContainerEl.appendChild(imgEl);
}
