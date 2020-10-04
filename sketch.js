
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground
var survivalTime=0
var bananas


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  console.log(monkey.y)
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  //console.log(ground.x);
  FoodGroup = createGroup;
}


function draw() {
background("green");
if (keyDown("space")) {
        monkey.velocityY = -12;
}
  monkey.velocityY = monkey.velocityY + 0.8;
   if (ground.x < 0){
    ground.x = ground.width/2;
  }
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time"+ survivalTime,100,50);
  
  bananas();
  obstacles();
  drawSprites();
}



function bananas(){
  
  if (frameCount%80===0){
  banana=createSprite(200,200,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.y = Math.round(random(120,200));
  banana.x= banana.x-1;
  banana.lifetime=80;
  FoodGroup().add(banana);
  }
  
}

function obstacles(){
  if (frameCount%300===0){
    obstacle=createSprite(200,330,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.lifetime=300;
  }
}


