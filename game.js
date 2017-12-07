 // Creating variables
var myX     =   50,
    myY     =  300,
    enemy1X =  400,
    enemy2X =  752,
    enemy3X = 1567,
    enemy4X = 1567,
    enemy5X = 1234;

var c=document.getElementById("canvas-id");
var ctx=c.getContext("2d");


function update() {
    myY += 2;    //myY=myY+2;
    if(myY < 1 || myY > 570){
        myY = 1;  
    }
    //if(myY<1){myY=570;}
    if(enemy1X, enemy2X, enemy3X, enemy4X, enemy5X<0){
        enemy1X =  400;
        enemy2X =  752;
        enemy3X = 1567;
        enemy4X = 800;
        enemy5X = 1000;
    }
    
    enemy1X -=  1; // first=first-2;
    enemy2X -=  3; //secound=secound-4; 
    enemy3X -=  4; //third=third-6;
    enemy4X -=  3; //fourth=fourth-8;
    enemy5X -=  1; //fivth=fivth-10;
    
}



function draw() {
    // This is how you draw a rectangle
    ctx.fillRect(myX, myY, 30, 30);
    ctx.fillRect(enemy1X, 300, 30, 175);
    ctx.fillRect(enemy2X, 350, 30, 150);
    drawEnderman(ctx, enemy3X, enemy3X, .8);
    drawTank(ctx, enemy4X,150, 1, 90);
	drawEnderman(ctx, enemy5X, 10, .5);

};





function keyup(key) {         
    if(key == 38) myY -= 80; //  ^
    if(key == 40) myY += 40; //  v
    if(key == 37) myX -= 40; //  <-
    if(key == 39) myX += 40; //  ->
    
    if(key == 87) myY -= 80; // w
    if(key == 83) myY += 40; // s
    if(key == 65) myX -= 40; // a
    if(key == 68) myX += 40; // d
    
    //myX=myX+25;
    // Show the pressed keycode in the console
    console.log("Pressed", key);
    
};

function mouseup(){
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
    
};




{ //my code

function deg2rad(degree){
	return degree * Math.PI / 180;
}

function rotatingCoordinates(x, y, a){
    var  a = deg2rad(a),
		 O = Math.atan(y / x) + a,
		 r = Math.sqrt(x * x + y * y),
		dx = x - r * Math.cos(O),
		dy = y - r * Math.sin(O);
	return [dx, dy];
}

function drawUnHuman(){
    
    context.fillRect(303,70,30,175);
    context.fillRect(25,170,30,175);
    context.fillRect(110,170,30,175);
    context.fillRect(1,170,175,30);
    context.fillRect(1,150,175,30);
    context.fillRect(1,140,175,30);
    context.fillRect(1,120,175,30);
    context.fillRect(1,100,175,30);
    context.fillRect(70,80,250,30);
    context.fillRect(1,80,175,30);
    context.fillRect(70,40,50,50);//glawa

    
}

function drawTank(context, tankX, tankY, scale = 1, angle = 0 ){
	trackWidth  =  20 * scale;
	trackHeight = 200 * scale;
	bodyWidth   = 100 * scale;
	bodyHeight  = 150 * scale;
	towerWidth  =  70 * scale;
	towerHeight = 100 * scale;
	gunWidth    =  10 * scale;
	gunHeight   = 120 * scale;
	trackColor  = "#555";
	bodyColor   = "#990";
	towerColor  = "#440";
	gunColor    = "#330";
	
	trackLeftX  = tankX;
	trackLeftY  = tankY;
	trackRightX = tankX + bodyWidth;
	trackRightY = tankY;
	bodyX = tankX + trackWidth / 2;
	bodyY = tankY + trackWidth;
	towerX = bodyX + (bodyWidth - towerWidth) / 2;
	towerY = bodyY + trackWidth;
	gunX = towerX + (towerWidth - gunWidth) / 2;
	gunY = towerY + towerHeight;
	
	transCoord = rotatingCoordinates(tankX, tankY, angle);
	
	context.save();
	context.translate(transCoord[0], transCoord[1]);
	context.rotate(deg2rad(angle));
	
	context.fillStyle = trackColor;
	context.fillRect(trackLeftX,  trackLeftY,  trackWidth, trackHeight);
	context.fillRect(trackRightX, trackRightY, trackWidth, trackHeight);
	
	context.fillStyle = bodyColor;
	context.fillRect(bodyX, bodyY, bodyWidth, bodyHeight);
	
	context.fillStyle = towerColor;
	context.fillRect(towerX, towerY, towerWidth, towerHeight);
	
	context.fillStyle = gunColor;
    context.fillRect(gunX, gunY, gunWidth, gunHeight);
	
	context.restore();
}

function drawEnderman(context, endermanX, endermanY, scale = 1){
    headWidth  = 40 * scale;
    headHeight = 30 * scale;
  
    eyeWidth  = 10 * scale;
    eyeHeight = 4 * scale;
    
    bodyWidth = headWidth;
    bodyHeight = 60 * scale;
    
    handWidth  = 10 * scale;
    handHeight = 100 * scale;
    
	context.save();
    legWidth  = handWidth;
    legHeight = handHeight;
    headColor = "#000";
    eyeColor  = "#f0f";
    bodyColor = headColor;   
    handColor = headColor;
    legColor  = headColor;
    
    headX = endermanX + handWidth;
    headY = endermanY;
 
    eyeLeftX  = headX + headWidth / 4 - eyeWidth / 2;
    eyeLeftY  = headY + headHeight / 3 - eyeHeight / 4;
    eyeRightX = eyeLeftX + headWidth * .5;
    eyeRightY = eyeLeftY;
   
    bodyX = endermanX + handWidth;
    bodyY = headY + headHeight;
         
    handLeftX  = endermanX;
    handLeftY  = bodyY;
    handRightX = bodyX + bodyWidth;
    handRightY = bodyY;
    legLeftX  = bodyX + bodyWidth / 4 - legWidth / 2;
    legLeftY  = bodyY + bodyHeight;
    legRightX = legLeftX + bodyWidth * .5;
    legRightY = legLeftY;
    
    
    context.fillStyle = headColor;
    context.fillRect(headX, headY, headWidth, headHeight);
    context.fillStyle = eyeColor;
    context.fillRect(eyeLeftX,  eyeLeftY,  eyeWidth, eyeHeight);
    context.fillRect(eyeRightX, eyeRightY, eyeWidth, eyeHeight);
    context.fillStyle = handColor;
    context.fillRect(handLeftX,  handLeftY,  handWidth, handHeight);
    context.fillRect(handRightX, handRightY, handWidth, handHeight);
    
    context.fillStyle = bodyColor;
    context.fillRect(bodyX, bodyY, bodyWidth, bodyHeight);
  
    context.fillStyle = legColor;
    context.fillRect(legLeftX,  legLeftY,  legWidth,  legHeight);
    context.fillRect(legRightX, legRightY, legWidth, legHeight);
	context.restore();
}



}
// end of my code

