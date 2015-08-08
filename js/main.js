window.onload = function() {

	var game = new Phaser.Game(800,600,Phaser.AUTO, '', { preload: preload, create: create});

	function preload() {
		game.load.image('bgtile', 'assets/images/bgtile.bmp');
	}

	function create () {
	    
            var logo = game.add.tileSprite(0, 0,800,640, 'bgtile',0);
          
	}

};