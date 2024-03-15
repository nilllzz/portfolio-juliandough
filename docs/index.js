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

	// Show trello social button if set in config.
	if (window.CONFIG.index.trelloBoard) {
		document
			.getElementById("trello-social-button")
			.classList.remove("hidden");
	}
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

/////////////////////////////////////////////////////
// Trello board
/////////////////////////////////////////////////////

/**
 * @param {MouseEvent} e
 */
function trelloBoardOpen(e) {
	const trelloBoardUrl = window.CONFIG.index.trelloBoard;

	// For touch/stylus inputs, always open in a new tab.
	// Touch devices are usually phones, and their screen resolution is not well
	// suited for embedding. In a new tab they at least have the full screen.
	if (e.pointerType !== "mouse") {
		window.open(trelloBoardUrl).focus();
		return;
	}

	const trelloBoardContainer = document.getElementById(
		"trello-board-container"
	);

	const iframe = document.createElement("iframe");
	iframe.src = trelloBoardUrl + ".html";
	iframe.className = "trello-board-iframe";

	trelloBoardContainer.appendChild(iframe);

	const newTabLinkEl = document.createElement("a");
	newTabLinkEl.className = "trello-board-new-tab";
	newTabLinkEl.href = trelloBoardUrl;
	newTabLinkEl.target = "_blank";

	const newTabIconEl = document.createElement("i");
	newTabIconEl.className = "bi bi-box-arrow-up-right";
	newTabLinkEl.appendChild(newTabIconEl);

	const newTabTextEl = document.createTextNode(" Open in new tab");
	newTabLinkEl.appendChild(newTabTextEl);

	trelloBoardContainer.appendChild(newTabLinkEl);

	const trelloEl = document.getElementById("trello-board");
	trelloEl.classList.remove("hidden");
	document.body.classList.add("noscroll");
}

function trelloBoardClose() {
	const trelloBoardContainer = document.getElementById(
		"trello-board-container"
	);
	trelloBoardContainer.innerHTML = "";

	const trelloEl = document.getElementById("trello-board");
	trelloEl.classList.add("hidden");
	document.body.classList.remove("noscroll");
}
