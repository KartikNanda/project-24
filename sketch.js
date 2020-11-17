
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall;
var ground;
var rectangle1,rectangle2,rectangle3;
function preload()
{
	paperBall=createSprite(30,370,20,20);
	rectangle1=createSprite(700,400,450,20);
	rectangle2=createSprite(550,350,10,100)
	rectangle3=createSprite(750,350,10,100);

}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		
	}

}

