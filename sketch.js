const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, cat1, string3;
var backgroundImg, platform;
var cat, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;
function preload() {
  backgroundImg = loadImage("sprites/galaxy.png");
}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height, 1200, 20);
  platform = new Ground(150, 305, 300, 170);

  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  box3 = new Box(920, 300, 70, 70);
  string1 = new String(810, 350);
  log1 = new Log(810, 260, 300, PI / 2);

  box4 = new Box(700, 340, 70, 70);
  box5 = new Box(700, 200, 70, 70);
  box6 = new Box(920, 240, 70, 70);
  string3 = new String(810, 220);

  log3 = new Log(810, 180, 300, PI / 2);

  box7 = new Box(810, 160, 70, 70);

  box9 = new Box(920, 250, 70, 70);
  box10 = new Box(700, 250, 70, 70);
  log4 = new Log(760, 120, 150, PI / 7);
  log5 = new Log(870, 120, 150, -PI / 7);

  cat = new Cat(200, 50);

  //log6 = new Log(230,180,80, PI/2);
  slingshot = new SlingShot(cat.body, { x: 200, y: 50 });
}

function draw() {
  if (backgroundImg) background(backgroundImg);


  Engine.update(engine);
  //strokeWeight(4);
  box1.display();
  box2.display();
  ground.display();
  string1.display();
  string1.score();
  log1.display();

  box3.display();
  box7.display();
  box4.display();

  string3.display();
  string3.score();
  log3.display();

  box5.display();
  box6.display();
  box9.display();
  box10.display();
  log4.display();
  log5.display();

  cat.display();
  platform.display();
  //log6.display();
  slingshot.display();
}

function mouseDragged() {
  //  if (gameState!=="launched"){
  Matter.Body.setPosition(cat.body, { x: mouseX, y: mouseY });
  //  }
}

function mouseReleased() {
  slingshot.fly();
  gameState = "launched";
}

function keyPressed() {
  if (keyCode === 32) {
    cat.trajectory = [];

    Matter.Body.setPosition(cat.body, { x: mouseX, y: mouseY });
    slingshot.attach(cat.body);
  }
}
