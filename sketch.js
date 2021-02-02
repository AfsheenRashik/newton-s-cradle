
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;



var bob1,bob2,bob3,bob4,bob5;
var roof;
var c1,c2,c3,c4,c5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof (270,220,220,30)

    bob1 = new Bob (191,405,10)
	bob2 = new Bob (231,405,10)                       
	bob3 = new Bob (272,405,10)
	bob4 = new Bob (311,405,10)
	bob5 = new Bob (351,405,10)

	c1 = new Rope (roof.body,bob1.body,-bob1.Diameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  text(mouseX+","+mouseY,mouseX,mouseY);
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

c1.display();

roof.display();
 // drawSprites();
 
}



