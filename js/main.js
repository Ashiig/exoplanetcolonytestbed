window.onload = function() {

	var game = new Phaser.Game(800,600,Phaser.AUTO, '', { preload: preload, create: create});

	var typeList = ['build001','build002','build003'];
	var offset = [0,0];	
	
	var upAro, downAro, leftAro, rightAro;

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
		game.load.image('arrow', 'assets/images/arrow.png');
		game.load.image('arrow_defunct', 'assets/images/arrow_defunct.png');
	}

	function create () {
	    //var objArray = [new building(0,0,typeList[0]), new building(3,2,typeList[2]), new building(8,6, typeList[1])];
            var objArray = [];
	    for(i = 0; i < 12; i++){
		for(j = 0; j < 12; j++){
		    
		    //objArray[(i * 12) + j] = new building(i,j,typeList[((i * 12) + j) % 3]);
		}
	    }

	    var logo = game.add.tileSprite(0, 0,800,640, 'bgtile',0);
             
	    for (i = 0; i < objArray.length; i++){
		game.add.sprite((objArray[i].xLoc * (199/3)) + 1, (objArray[i].yLoc * 199/3) + 1, objArray[i].type);
	    }

//var building = game.add.sprite(1,1,'build001');
	    game.stage.smoothed = false;
	    //var bmd = game.make.bitmapData(64,64);
	    //bmd.alphaMask('build001','build001');

	    //game.add.image(1,1,bmd);

	    downAro = game.add.button(400, 640 - 64, 'arrow', move_down, this);
	    downAro.anchor.setTo(0.5, 0.5);
	    downAro.angle = (180);


	    upAro = game.add.button(400, 64, 'arrow_defunct', move_up, this);
	    upAro.anchor.setTo(0.5, 0.5);
	    upAro.angle = (0);


	    leftAro = game.add.button(64, 320, 'arrow_defunct', move_left, this);
	    leftAro.anchor.setTo(0.5, 0.5);
	    leftAro.angle = (270);


	    rightAro = game.add.button(800 - 64, 320, 'arrow', move_right, this);
	    rightAro.anchor.setTo(0.5, 0.5);
	    rightAro.angle = (90);
	}
	
	function move_down() {
		if(offset[1] < 64){
		upAro.key = 'arrow';
		offset[1] += 1;
		console.log(offset[1]);
		if(offset[1] == 64){
			downAro.key = 'arrow_defunct';
		}
		}
	}

	function move_left() {
		if(offset[0] >= 1){
		offset[0] -= 1;
		console.log(offset[1]);
		if(offset[0] == 0){
			leftAro.key = 'arrow_defunct';
		}
		}
	}

	function move_right() {
		if(offset[0] < 64){
		leftAro.key = 'arrow';
		offset[1] += 1;
		console.log(offset[1]);
		if(offset[0] == 64){
			rightAro.key = 'arrow_defunct';
		}
		}
	}

	function move_up() {
		if(offset[1] >= 1){
			downAro.key = 'arrow';
			offset[1] -= 1;
			console.log(offset[1]);
			if(offset[1] == 0){
				upAro.key = 'arrow_defunct';
			}
		}
		
	}
};