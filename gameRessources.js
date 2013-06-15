//game resources
var g_resources = [
	// Menu
	{ name: "title_screen", type: "image", src: "data/GUI/title_screen.png"},
	{ name: "credit_screen", type: "image", src: "data/GUI/credit_screen.png"},
	// our level tileset
	{ name: "intro_level_tiles", type: "image",src: "data/intro_tileset/intro_level_tiles.png"},
	{ name: "area01_level_tiles", type: "image",src: "data/area01_tileset/area01_level_tiles.png"},
	// the parallax background
	{ name: "intro_bkg0", type: "image", src: "data/intro_parallax/intro_bkg0.png"}, 
	{ name: "intro_bkg1", type: "image", src: "data/intro_parallax/intro_bkg1.png"},
	{ name: "area01_bkg0", type: "image", src: "data/area01_parallax/area01_bkg0.png"}, 
	{ name: "area01_bkg1", type: "image", src: "data/area01_parallax/area01_bkg1.png"},
	// our level
	{ name: "intro", type: "tmx", src: "data/intro.tmx"},
	{ name: "area00", type: "tmx", src: "data/area00.tmx"},
	{ name: "area01", type: "tmx", src: "data/area01.tmx"},
	{ name: "area02", type: "tmx", src: "data/area02.tmx"},
	{ name: "area03", type: "tmx", src: "data/area03.tmx"},
	{ name: "endGame", type: "tmx", src: "data/endGame.tmx"},
	// the main player spritesheet
	{ name: "gripe_run_right", type: "image", src: "data/sprite/gripe_run_right.png"},
	// the spinning coin spritesheet
	{ name: "spinning_coin_gold", type: "image", src: "data/sprite/spinning_coin_gold.png"},
	// our enemy entity
	{ name: "wheelie_right", type: "image", src: "data/sprite/wheelie_right.png"},
	// game font
	{ name: "32x32_font", type: "image", src: "data/sprite/32x32_font.png"},
	// audio resources
	{ name: "maintheme", type: "audio", src: "data/audio/", channel: 8}, 
	{ name: "projet01theme", type: "audio", src: "data/audio/", channel: 8}, 
	// bruitages
	{ name: "cling", type: "audio", src: "data/audio/", channel: 8}, 
	{ name: "explosion_la", type: "audio", src: "data/audio/", channel: 8}, 
	{ name: "stomp", type: "audio", src: "data/audio/", channel: 8}, 
	{ name: "jump", type: "audio", src: "data/audio/", channel: 8}
];