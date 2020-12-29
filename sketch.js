
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	ball1=new Ball(700,500,40);
	ball2=new Ball(750,500,40);
	ball3=new Ball(800,500,40);
	ball4=new Ball(850,500,40);
	chain1=new Chain(ball1.body, {x:700, y:200 });
	chain2=new Chain(ball2.body, {x:740, y:200 });
	chain3=new Chain(ball3.body, {x:780, y:200 });
	chain4=new Chain(ball4.body, {x:820, y:200 });
	roof1=new ground(800,200,500,40);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
 

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  roof1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-25,y:-15});
    
  	}
}





