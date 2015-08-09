window.onload = function () {

	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update});

	var typeList = ['build001', 'build002', 'build003', 'build005', 'build006'];
	var offset = [0, 0, false];
	
	var upAro, downAro, leftAro, rightAro;
	var objArray = [];
	function building(xLoc, yLoc, type) {
		this.xLoc = xLoc;
		this.yLoc = yLoc;
		this.type = type;
		this.obj = undefined;
	}
	function move_down() {
		if(offset[1] < 64){
		upAro.frame = 1;
		offset[1] += 1;
		console.log(offset[1]);
		if(offset[1] >= 64){
			downAro.frame = 0;
		}
		offset[2] = true;
		}
	}

	function move_left() {
		if(offset[0] >= 1){
		rightAro.frame = 1;
		offset[0] -= 1;
		console.log(offset[0]);
		if(offset[0] <= 0){
			leftAro.frame = 0;
		}
		offset[2] = true;
		}
	}

	function move_right() {
		if(offset[0] < 64){
            leftAro.frame = 1;
            offset[0] += 1;
            console.log(offset[0]);
            if(offset[0] >= 64){
                rightAro.frame = 0;
            }
            offset[2] = true;
        }
	}

	function move_up() {
		if(offset[1] >= 1){
		downAro.frame = 1;
		offset[1] -= 1;
		console.log(offset[1]);
		if(offset[1] <= 0){
			upAro.frame = 0;
		}
		offset[2] = true;
		}
		
	}
    
    function onClickMap(sprite, pointer) {
        console.log(pointer.position.x, pointer.position.y);
        move_right();
    }
    
	function preload() {
		game.load.image('bgtile', 'assets/images/bgtile.bmp');
		game.load.image('build001', 'assets/images/building001.png');
		game.load.image('build002', 'assets/images/building002.png');
		game.load.image('build003', 'assets/images/building003.png');
		game.load.image('build005', 'assets/images/building005.png');
		game.load.image('build006', 'assets/images/building006.png');
		game.load.spritesheet('arrow', 'assets/images/arrow_spritesheet.png', 64, 64, 64,0, 0);
		//game.load.image('arrow_defunct', 'assets/images/arrow_defunct.png');
	}

	function create () {
	    //var objArray = [new building(0,0,typeList[0]), new building(3,2,typeList[2]), new building(8,6, typeList[1])];.
        var mapGroup = game.add.group();
        var imageGroup = game.add.group(mapGroup);
        var inputGroup = game.add.group(mapGroup);
	    for(i = 0; i < 12; i++){
		for(j = 0; j < 12; j++){
		    //if(i % 5 == j){
		    objArray[(i * 12) + j] = new building(i,j,typeList[(i  + j) % 5]);
		    //}
		}
	    }

	    var logo = game.add.tileSprite(0, 0,800,640, 'bgtile', 0, imageGroup);
        
	    for (i = 0; i < objArray.length; i++){
		objArray[i].obj = game.add.sprite(((objArray[i].xLoc - offset[0])* (199/3)) + 1, ((objArray[i].yLoc - offset[1]) * 199/3) + 1, objArray[i].type, imageGroup);
	    }

//var building = game.add.sprite(1,1,'build001');
	    game.stage.smoothed = false;
	    //var bmd = game.make.bitmapData(64,64);
	    //bmd.alphaMask('build001','build001');
        
        
        var drawnObject;
        var width = 800 // example;
var height = 640 // example;
var bmd = game.add.bitmapData(width, height);
 
bmd.ctx.beginPath();
bmd.ctx.rect(0, 0, width, height);
bmd.ctx.fillStyle = '#ffffff';
bmd.ctx.fill();
drawnObject = game.add.sprite(game.world.centerX, game.world.centerY, bmd, 0, inputGroup);
        drawnObject.alpha = 0;
//drawnObject.anchor.setTo(0.5, 0.5);
        
        
        drawnObject.inputEnabled = true;
        drawnObject.input.pixelPerfectClick = true;
        drawnObject.input.pixelPerfectAlpha = 0;
        drawnObject.hitArea = new Phaser.Rectangle(0,0,800,640);
        drawnObject.useHandCursor = true;
        
        drawnObject.events.onInputUp.add(onClickMap, this);
        
        
        
        
	    //game.add.image(1,1,bmd);

	    downAro = game.add.button(400, 640 - 64, 'arrow', move_down, this,inputGroup);
	    downAro.frame = 1;
	    downAro.anchor.setTo(0.5, 0.5);
	    downAro.angle = (180);


	    upAro = game.add.button(400, 64, 'arrow', move_up, this, inputGroup);
	    upAro.frame = 0;
	    upAro.anchor.setTo(0.5, 0.5);
	    upAro.angle = (0);


	    leftAro = game.add.button(64, 320, 'arrow', move_left, this, inputGroup);
   	    leftAro.frame = 0;
	    leftAro.anchor.setTo(0.5, 0.5);
	    leftAro.angle = (270);


	    rightAro = game.add.button(800 - 64, 320, 'arrow', move_right, this, inputGroup);
	    rightAro.frame = 1;
	    rightAro.anchor.setTo(0.5, 0.5);
	    rightAro.angle = (90);
	}
	
	

	function update() {
	if(offset[2]){
	    for (i = 0; i < objArray.length; i++){
		objArray[i].obj.x = ((objArray[i].xLoc - offset[0]) * (199/3)) + 1;
		objArray[i].obj.y = ((objArray[i].yLoc - offset[1]) * (199/3)) + 1;
		
	    }
	    offset[2] = false;
	}		
	}
	
};