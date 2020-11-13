const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

                   
var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
 engine=Engine.create();
  world=engine.world;
var groundOption={
  isStatic:true 
}
  ground=Bodies.rectangle(200,390,400,20,groundOption);

  World.add(world,ground);

var ballOption={
    restitution:1
  }
  ball=Bodies.circle(100,100,20,ballOption);
  World.add(world,ball);
  

  

}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)

 
}