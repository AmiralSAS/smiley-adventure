/*!
 * 
 *   melonJS
 *   http://www.melonjs.org
 *		
 *   Step by step game creation tutorial
 *
 **/

var jsApp	= 
{	
	/* ---
		Initialize the jsApp
		---			*/
	onload: function()
	{
		
		// init the video
		if (!me.video.init('jsapp', 640, 480, false, 1.0))
		{
			alert("Sorry but your browser does not support html 5 canvas.");
         return;
		}
		// initialize the "audio"
		me.audio.init("mp3,ogg");
		
		// set all resources to be loaded
		me.loader.onload = this.loaded.bind(this);
		
		// set all resources to be loaded
		me.loader.preload(g_resources);

		// load everything & display a loading screen
		me.state.change(me.state.LOADING);
	},
	
	
	/* ---
	
		callback when everything is loaded
		
		---										*/
	loaded: function() {
		// set the "Title" Screen Object
		me.state.set(me.state.MENU, new TitleScreen());
	 
		// set the "Play/Ingame" Screen Object - Intro
		me.state.set(me.state.PLAY, new Intro());
		
		// set the "Credit" Screen Object
		me.state.set(me.state.CREDIT, new CreditScreen());
	 
		// set a global fading transition for the screen
		me.state.transition("fade", "#FFFFFF", 250);
	 
		// add our player entity in the entity pool
		me.entityPool.add("mainPlayer", PlayerEntity);
		me.entityPool.add("CoinEntity", CoinEntity);
		me.entityPool.add("EnemyEntity", EnemyEntity);
		me.entityPool.add("gotoCredit", gotoCredit);
	 
		// enable the keyboard
		me.input.bindKey(me.input.KEY.LEFT, "left");
		me.input.bindKey(me.input.KEY.RIGHT, "right");
		me.input.bindKey(me.input.KEY.X, "jump", true);
	 
		// display the menu title
		me.state.change(me.state.MENU);
		
		me.debug.renderHitBox = false;
	}

}; // jsApp


//bootstrap :)
window.onReady(function() 
{
	jsApp.onload();
});