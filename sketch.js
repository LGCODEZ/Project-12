var garden,rabbit;
var gardenImg,rabbitImg;
var appl,apple;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appl=loadImage("apple.png");

}
function createApple(){
  
apple =createSprite(Math.random(50,350),200,200,200)
apple.addImage(appl);
apple.scale=0.1
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if (frameCount%60==0){
    createApple;

  }

  drawSprites();
}