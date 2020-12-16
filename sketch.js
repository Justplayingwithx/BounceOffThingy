var fixedRect;
var movingRectangle;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRectangle = createSprite(700,200,30,30);

  fixedRect.shapeColor = "red";
  movingRectangle.shapeColor = "green";

  fixedRect.debug=true;
  movingRectangle.debug=true;

  movingRectangle.velocityX=-3;

}

function draw() {
  background(255,255,255);  
 /* movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;*/

  if(movingRectangle.x-fixedRect.x<fixedRect.width/2+movingRectangle.width/2
    &&fixedRect.x - movingRectangle.x<fixedRect.width/2+movingRectangle.width/2
    ){
      fixedRect.velocityX = fixedRect.velocityX * (-1);
      movingRectangle.velocityX=movingRectangle.velocityX * (-1);
      
  }
  if(movingRectangle.y-fixedRect.y<fixedRect.height/2+movingRectangle.height/2
    &&fixedRect.y- movingRectangle.y<fixedRect.height/2+movingRectangle.height/2){
    fixedRect.velocityY = fixedRect.velocityY * (-1)
    movingRectangle.velocityY = movingRectangle.velocityY * (-1)
  }
  drawSprites();
  
}