window.onload = function() {

	var game = new Phaser.Game(800,600,Phaser.AUTO, '', { preload: preload, create: create});

	function preload() {
		game.load.image('bgtile', 'assets/images/bgtile.bmp');
	}

	function create () {
	    //var background = new TileSprite(game, 0,0, game.world.width, game.world.height, 'bgtile', 0);
            var logo = game.add.tileSprite(0, 0,800,640 'bgtile',0);
            //logo.anchor.setTo(0.5, 0.5);
	}

};