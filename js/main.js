window.onload = function() {

	var game = new Phaser.Game(800,600,Phaser.AUTO, '', { preload: preload, create: create});

	function preload() {
		game.load.image('logo', 'phaser.png');
	}

	function create () {

	}

};