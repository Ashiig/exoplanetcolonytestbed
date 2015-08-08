window.onload = function() {

	var game = new Phaser.Game(800,600,Phaser.AUTO, '', { preload: preload, create: create});

	var typeList = ['build001','build002','build003'];

	function building(_xLoc, _yLoc, _type) {
		this.xLoc = _xLoc;
		this.yLoc = _yLoc;
		this.type = _type;
	}
	
	function preload() {
		game.load.image('bgtile', 'assets/images/bgtile.bmp');
		game.load.image('build001', 'assets/images/building001.png');
		game.load.image('build002', 'assets/images/building002.png');
		game.load.image('build003', 'assets/images/building003.png');
	}

	function create () {
	    var objArray = [new building(0,0,typeList[0]), new building(3,2,typeList[2]), new building(8,6, typeList[1])];
            var logo = game.add.tileSprite(0, 0,800,640, 'bgtile',0);
            
	    for (i = 0; i < objArray.length; i++){
		game.add.sprite((objArray[i].xLoc * 64) + 1, (objArray[i].yLoc * 64) + 1, objArray[i].type);
	    }

//var building = game.add.sprite(1,1,'build001');
	    game.stage.smoothed = false;
	    //var bmd = game.make.bitmapData(64,64);
	    //bmd.alphaMask('build001','build001');

	    //game.add.image(1,1,bmd);
	}

};