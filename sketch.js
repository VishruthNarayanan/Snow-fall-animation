const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Snow;

function preload(){
backgroundImage = loadImage("snow1.jpg")
}
function setup() {
  createCanvas(1280,619);
  engine = Engine.create();
	world = engine.world;

  Snow = new snow(200,10,5);

  Engine.run(engine);
}

function draw() {
  background(backgroundImage);
  drawSprites();

  if (frameCount %60 === 0) {
    particles.push(new snow(random(width/2-30, width/2+30),10,10));
  }
  Snow.display();

  for (var h = 0; h<snow.length; h++) {
    Snow[h].display();
    
  }
  
  }

  