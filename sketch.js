const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var snow;

var fall = [];
function preload(){
backgroundImage = loadImage("snow3.jpg")
snowImage = loadImage("snow5.webp")
}
function setup() {
  createCanvas(1280,619);
  engine = Engine.create();
	world = engine.world;

  

  
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

   if (frameCount %5 === 0) {
     fall.push(snow =new Snow());
   }
   

   for (var h = 0; h<fall.length; h++) {
     fall[h].display(); 
   }
  drawSprites();  

}
