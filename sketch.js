function setup() {
  createCanvas(800,400);
  p1 = createSprite(400, 200, 50, 50);
  p2 = createSprite(400, 200, 50, 50);
}

function draw() {
  background("lightblue");
  p1.x = mouseX
  p1.y = mouseY

  if(abs(p1.x - p2.x) < p1.width/2 + p2.width/2 && 
     abs(p1.y - p2.y) < p1.height/2 + p2.height/2) {
    p1.shapeColor = "green"
    p2.shapeColor = "green"
  }

  else {
    p1.shapeColor = "red"
    p2.shapeColor = "red"
  }

  
  drawSprites();
}