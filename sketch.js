
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	myWorld = engine.world;

	paper=new Paper(100,100);
	dustbinObj=new Dustbin(1200,680);
	ground=new Ground(width/2,680,width,40)

Engine.run(engine); 
}
function draw() {
  
  background("YELLOW");
  ground.display();
  paper.display();
  dustbinObj.display();
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.paperBody,paper.paperBody.position,{x:150,y:-160});
	}
}

