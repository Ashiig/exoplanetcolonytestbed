window.onload = function() {

	var game = new Phaser.Game(800,600,Phaser.AUTO, '', { preload: preload, create: create});

	function preload() {
		game.load.image('bgtile', 'assets/images/bgtile.bmp');
		game.load.image('build001', 'assets/images/building001.bmp');
	}

	function create () {
	    
            var logo = game.add.tileSprite(0, 0,800,640, 'bgtile',0);
            //var building = game.add.sprite(1,1,build001);
	    var bmd = game.make.bitmapData(64,64);
	    bmd.alphaMask('build001','build001');

	    game.add.image(1,1,bmd);
	}

};