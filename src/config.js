// START CONFIG DEFINITION
const __config = {
	images: {
		"001": {
			url: "001.jpg",
			name: "Klonoa",
		},
		"002": {
			url: "002.jpg",
			name: '"Late for school"',
		},
		"003": {
			url: "003.jpg",
			name: "Yippee 😺",
		},
		"004": {
			url: "004.jpg",
			name: "OwO or UwU",
		},
		"005": {
			url: "005.jpg",
			name: "Me as gojo",
		},
		"006": {
			url: "006.jpg",
			name: "Loona",
		},
		"007": {
			url: "007.jpg",
			name: "Gnarpy the cat!",
		},
		"008": {
			url: "008.jpg",
			name: "So, I'm a developer. (codeHusky)",
		},
		"009": {
			url: "009.jpg",
			name: "Helldivers 2 yeahhhh!! For democracy!!!",
		},
		"010": {
			url: "010.jpg",
			name: "Omg is that bluelight!",
		},
		"011": {
			url: "011.jpg",
			name: "furry dragon!! 🐉 I really love the shading I did for her 💖",
		},
		"012": {
			url: "012.jpg",
			name: "My most beautiful art so far I’ve made 🥹",
		},
	},
	copyrightText: "Copyright © 2024 Julian Dough",
	index: {
		commissionsOpen: true,
		portfolioImages: [
			"001",
			"002",
			"003",
			"004",
			"005",
			"006",
			"007",
			"008",
			"009",
			"010",
			"011",
			"012",
		],
		bioText:
			"I draw furry art, trying to make a comic but have lack motivation into starting it, I like watching YouTube tho",
	},
	gallery: {
		images: ["001"],
	},
};
// END CONFIG DEFINITION

window.CONFIG = __config;

/**
 * Returns one of the defined config images given its id.
 * @param {string} imageId
 * @return {GalleryImage}
 */
function getConfigImage(imageId) {
	return window.CONFIG.images[imageId];
}
