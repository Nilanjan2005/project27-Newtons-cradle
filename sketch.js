
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var Roof;
var Rope,Rope2,Rope3,Rope4,Rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(300,450,50);
bob2 = new Bob(350,450,50);
bob3 = new Bob(400,450,50);
bob4 = new Bob(450,450,50);
bob5 = new Bob(500,450,50);

Roof = new roof(400,100,220,25);
Rope  = new rope(Roof.body,bob1.body);
Rope2 = new rope(Roof.body,bob2.body);
Rope3 = new rope(Roof.body,bob3.body);
Rope4 = new rope(Roof.body,bob4.body);
Rope5 = new rope(Roof.body,bob5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

Roof.display();
Rope.display();
Rope2.display();
Rope3.display();
Rope4.display();
Rope5.display();


  drawSprites();
 
}



