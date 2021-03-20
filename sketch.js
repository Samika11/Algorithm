function setup() {
  createCanvas(800,400);
  box=createSprite(400, 200, 50, 50);
  rectangle=createSprite(500,100,50,100)
  box.shapeColor="blue"
  rectangle.shapeColor="yellow"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  box.x=mouseX
  box.y=mouseY
  if(box.x-rectangle.x<rectangle.width/2+box.width/2
  && rectangle.x-box.x<rectangle.width/2+box.width/2
  && box.y-rectangle.y<rectangle.height/2+box.height/2
  && rectangle.y-box.y<rectangle.height/2+box.height/2){
    box.shapeColor="pink"
    rectangle.shapeColor="green"
  }
  else{
  box.shapeColor="blue"
  rectangle.shapeColor="yellow"
  }
}
