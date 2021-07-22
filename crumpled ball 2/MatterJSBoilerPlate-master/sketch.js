const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var paper1,ground,bin1,bin2,bin3;
var engine, world;
var ground1, ground2, ground3, edges;
var dusty
var launch
function preload()
{

}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
  
  ground1 =new Ground(400,500,1000,0.1)
 ground1.shapeColor=color(10,0,10)
 

 ground2 =new Ground(425,320,10,150)
 ground2.shapeColor=color(100,0,10)

 ground3 =new Ground(575,320,10,150)
 ground3.shapeColor=color(10,0,100)

 bin1=new Dustbin(500,320,0.1,0.1)
 paper1=new Paper(10,10,50,50);
 launch = new Launcher(paper1.body,{x:200,y:200});

 

	Engine.run(engine);
  
}


function draw(){
  background(255);
  Engine.update(engine);

  paper1.display();
  ground1.display();
  ground2.display();
  ground3.display();

  bin1.display();
launch.display()

 
}

function mouseDragged()
{
	Matter.Body.setPosition(paper1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launch.fly();
}