/////////////////////////////////////////////////////
// Load config
/////////////////////////////////////////////////////

function loadIndexConfig() {
	// Commission status
	const isCommissionOpen = window.CONFIG.index.commissionsOpen;
	const commissionIndicatorEl = document.getElementById(
		isCommissionOpen
			? "commission-indicator-open"
			: "commission-indicator-closed"
	);
	commissionIndicatorEl.classList.remove("hidden");

	// Bio text
	const bioText = window.CONFIG.index.bioText;
	document.getElementById("bio").innerText = bioText;

	// Copyright text
	const copyrightText = window.CONFIG.copyrightText;
	document.getElementById("copyright").innerText = copyrightText;

	// Load portfolio images from config.
	const portfolioImageIds = window.CONFIG.index.portfolioImages;
	addPortfolioPreviewImages(portfolioImageIds.map((x) => getConfigImage(x)));
}

/**
 * @param {Array<GalleryImage>} images
 */
function addPortfolioPreviewImages(images) {
	const portfolioPreviewContainerEl = document.getElementById(
		"portfolio-preview-container"
	);

	let i = 0;
	for (const image of images) {
		const imgEl = document.createElement("div");
		imgEl.className = "portfolio-preview-img";
		imgEl.style.backgroundImage = "url('img/portfolio/" + image.url + "')";
		imgEl.setAttribute("alt", image.name);
		const j = i;
		imgEl.onclick = () => lightboxOpen(images, j);
		portfolioPreviewContainerEl.appendChild(imgEl);

		i++;
	}
}

loadIndexConfig();
