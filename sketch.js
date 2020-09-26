const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


const Constraint = Matter.Constraint;

var divisions=[];
var plinkos=[];

var ground;
//var plinko;

var engine,world;
var divisionheight=300;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,480);
  plinkos=new Plinko();
  for (var k=0; k <=width; k=k + 80){
    divisions.push(new Division(k, height-divisionheight/2, 10, divisionheight));
  }
  
  for (var j=40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for (var j=15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  
  ground=new Ground(250,height,1200,30);
Engine.run(engine);
 
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  ground.display();
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  
  /*plinko.display();*/
  drawSprites();
}
