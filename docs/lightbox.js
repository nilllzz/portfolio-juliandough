/**
 * @type {Array<GalleryImage>}
 */
let lightboxImages = [];
let lightboxIndex = 0;

function lightboxClose() {
	const lightboxEl = document.getElementById("lightbox");
	lightboxEl.classList.add("hidden");
	document.body.classList.remove("noscroll");

	document.removeEventListener("keydown", onKeyDownLightbox);
}

/**
 * @param {Array<GalleryImage>} inputImages
 */
function lightboxOpen(inputImages, shift = 0) {
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
	lightboxEl.classList.remove("hidden");
	document.body.classList.add("noscroll");

	lightboxImages = images;
	lightboxIndex = 0;
	lightboxNavigate(0);

	document.addEventListener("keydown", onKeyDownLightbox);
}

/**
 * @param {KeyboardEvent} e
 */
function onKeyDownLightbox(e) {
	switch (e.key) {
		case "Escape":
			lightboxClose();
			break;
		case "ArrowRight":
			lightboxNavigate(1);
			break;
		case "ArrowLeft":
			lightboxNavigate(-1);
			break;
	}
}

/**
 * @param {number} delta
 */
function lightboxNavigate(delta) {
	// Load img element:
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

	const image = lightboxImages[lightboxIndex];
	const imageUrl = image.url;
	const imgEl = document.createElement("img");
	imgEl.className = "lightbox-img";
	imgEl.src = "img/portfolio/" + imageUrl;
	imgEl.onclick = () => {
		window.open(imgEl.src).focus();
	};

	lightboxImgContainerEl.appendChild(imgEl);

	// Load image info element:
	const lightboxImgInfoEl = document.getElementById("lightbox-img-info");
	lightboxImgInfoEl.innerHTML = "";

	const nameEl = document.createElement("span");
	nameEl.className = "lightbox-info-name";
	nameEl.innerText = image.name;
	lightboxImgInfoEl.appendChild(nameEl);

	if (image.description) {
		const descEl = document.createElement("span");
		descEl.className = "lightbox-info-desc";
		descEl.innerText = image.description;
		lightboxImgInfoEl.appendChild(descEl);
	}

	if (image.tags) {
		for (const tagId of image.tags) {
			const tag = getConfigTag(tagId);
			const tagEl = document.createElement("span");
			tagEl.className = "lightbox-info-tag";

			const tagIcon = document.createElement("i");
			tagIcon.className = "bi bi-tag";
			tagEl.appendChild(tagIcon);

			const tagNameEl = document.createElement("span");
			tagNameEl.innerText = " " + tag.name;
			tagEl.appendChild(tagNameEl);

			lightboxImgInfoEl.appendChild(tagEl);
		}
	}
}
