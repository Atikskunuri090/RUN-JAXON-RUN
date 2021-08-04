var runner, runnerimg

var path, pathimg

var invis1, invis2
  

function preload(){
  runnerimg = loadAnimation("Runner-1.png","Runner-2.png")
  pathimg = loadImage("path.png")
}

function setup(){
  createCanvas(800,800);
  path = createSprite (400,400,800,800);
  path.addImage("image",pathimg);
  path.velocityY = 4;
  path.scale = 0.8;
  runner = createSprite(400,600);
  runner.addAnimation("image", runnerimg);
  runner.scale = 0.08
  invis1 = createSprite(550,400,1,800)
  invis1.visibility = false
  invis2 = createSprite(250,400,1,800)
  invis2.visibility = false
}

function draw() {
  background("white")
  if (path.y > 450){
    path.y = height /2;
  }
  if (keyDown("right")){
    runner.x = runner.x + 5
  }
  if (keyDown("left")){
    runner.x = runner.x -5
  }
  runner.collide(invis1);
  runner.collide(invis2);
  
  drawSprites();
}
