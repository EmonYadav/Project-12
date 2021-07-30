




var leaf, leafImage;
var apple, appleImage;
var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
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
  rabbit.x = mouseX;

  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0) {

    if(select_sprites == 1){
      createApple();
    }
    
    else{
      createLeaf();
    }
    
    }

  drawSprites();
}

function createApple(){
apple = createSprite(random(50,350),40, 10, 10);
apple.addImage(appleImage);
apple.scale = 0.1;
apple.velocityY= 2.5;
apple.lifetime = 135;

}


function  createLeaf(){
leaf = createSprite(random(50,350),40,10,10);
leaf.addImage(leafImage);
leaf.scale = 0.1;
leaf.velocityY = 2.5;
leaf.lifetime = 135;

}




