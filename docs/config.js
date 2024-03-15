// START CONFIG DEFINITION
const __config = {
	images: {
		"001": {
			url: "001.jpg",
			name: "Happy fellow",
			tags: ["full-color", "self", "headshot"],
		},
		"002": {
			url: "002.jpg",
			name: '"Late for school"',
			tags: ["full-color", "headshot", "cat"],
		},
		"003": {
			url: "003.jpg",
			name: "Yippee 😺",
			tags: ["full-color", "headshot", "cat"],
		},
		"004": {
			url: "004.jpg",
			name: "OwO or UwU",
			tags: ["full-color", "headshot", "cat"],
		},
		"005": {
			url: "005.jpg",
			name: "Me as gojo",
			tags: ["self", "sketch", "anime"],
		},
		"006": {
			url: "006.jpg",
			name: "Loona",
			tags: ["full-color", "fanart", "headshot"],
		},
		"007": {
			url: "007.jpg",
			name: "Gnarpy the cat!",
			tags: ["full-color", "fanart", "bust"],
		},
		"008": {
			url: "008.jpg",
			name: "So, I'm a developer. (codeHusky)",
			tags: ["full-color", "fanart", "headshot", "anime"],
		},
		"009": {
			url: "009.jpg",
			name: "Helldivers 2 yeahhhh!! For democracy!!!",
			tags: ["full-color", "fanart", "headshot", "gaming"],
		},
		"010": {
			url: "010.jpg",
			name: "Omg is that bluelight!",
			tags: ["full-color", "fanart", "headshot"],
		},
		"011": {
			url: "011.jpg",
			name: "furry dragon!! 🐉 I really love the shading I did for her 💖",
			tags: ["full-color", "original", "headshot"],
		},
		"012": {
			url: "012.jpg",
			name: "My most beautiful art so far I’ve made 🥹",
			tags: ["full-color", "sketch", "self", "headshot"],
		},
	},
	tags: {
		self: {
			name: "Self portrait",
			description: "Self portrait",
		},
		"full-color": {
			name: "Full color",
			description: "Full color drawing",
		},
		sketch: {
			name: "Sketch",
			description: "Sketch drawing",
		},
		fanart: {
			name: "Fanart",
			description: "Fanart of an existing character or IP",
		},
		headshot: {
			name: "Headshot",
			description: "Headshot of a character",
		},
		bust: {
			name: "Bust",
			description: "Headshot and bust of a character",
		},
		cat: {
			name: "Cat",
			description: "😺",
		},
		anime: {
			name: "Anime",
			description: "Anime",
		},
		gaming: {
			name: "Gaming",
			description: "Character from a game, or gaming reference",
		},
		original: {
			name: "Original",
			description: "My OC, do not steal 😡",
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
		trelloBoard: "https://trello.com/b/AXUgclcj",
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

/**
 * Returns one of the defined config tags given its id.
 * @param {string} tagId
 * @return {ImageTag}
 */
function getConfigTag(tagId) {
	return window.CONFIG.tags[tagId];
}
