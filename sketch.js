const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
  pImg = loadImage("h.png");
}

function setup() {
	createCanvas(1250, 600);

    engine = Engine.create();
  	world = engine.world;

    Engine.run(engine);
    
    
    ground1 = new Ground(625,590,1250,20);
    ground2 = new Ground(625,11,1250,20)
    ground3 = new Ground(1236,10,20,1200);
    ground4 = new Ground(10,10,20,1200);
    ground5 = new Ground(613,500,340,20);
    ground6 = new Ground(743,200,130,20);
    box1 = new Box(484,468,40,40);
    box2 = new Box(528,468,40,40);
    box3 = new Box(572,468,40,40);
    box4 = new Box(616,468,40,40);
    box5 = new Box(660,468,40,40);
    box6 = new Box(704,468,40,40);
    box7 = new Box(748,468,40,40);
    box8 = new Box(528,424,40,40);
    box9 = new Box(572,424,40,40);
    box10 = new Box(616,424,40,40);
    box11 = new Box(660,424,40,40);
    box12 = new Box(704,424,40,40);
    box13 = new Box(572,380,40,40);
    box14 = new Box(616,380,40,40);
    box15 = new Box(660,380,40,40);
    box16 = new Box(616,340,40,40);
    box17 = new Box(700,180,20,20);
    box18 = new Box(722,180,20,20);
    box19 = new Box(744,180,20,20);
    box20 = new Box(766,180,20,20);
    box21 = new Box(788,180,20,20);
    box22 = new Box(722,158,20,20);
    box23 = new Box(744,158,20,20);
    box24 = new Box(766,158,20,20);
    box25 = new Box(744,136,20,20);
    ball = Bodies.circle(50,200,20);
  World.add(world,ball);
    sling = new Sling(this.ball,{x:150,y:100});
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  Engine.update(engine);

  textSize(20);
    fill("black");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the Blocks.",150,50); 
  
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  fill(250,100,100)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill(24,192,203);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("purple");
  box13.display();
  box14.display();
  box15.display();
  fill("orange")
  box16.display();
  fill("purple");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill("orange")
  box22.display();
  box23.display();
  box24.display();
  fill(250,100,100)
  box25.display();
  fill("black")
  sling.display();

  imageMode(CENTER)
  image(pImg ,ball.position.x,ball.position.y,40,40);

  drawSprites();
 }

 function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if (keyCode === 32){
    sling.attach(ball);
  }
}