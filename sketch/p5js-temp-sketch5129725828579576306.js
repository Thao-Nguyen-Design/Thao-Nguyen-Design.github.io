var mode;

let c1Img;
let c2Img;
let c3Img;
let c4Img;
let c5Img;

let mImg;
let gameoverImg;

let b1Img;
let b2Img;
let b3Img;
let b4Img;
let b5Img;

let obstacles;
let randint;
let score = 0;
let lost;
let next;
let spread;

var restart;
var PLAY = 1;
var END = 0;
var gameOver;
var gameState= "L0";

function preload(){
  gameoverImg = loadImage('https://thao-nguyen-design.github.io/sketch/gameover.png');
  menuImg = loadImage('https://thao-nguyen-design.github.io/sketch/menu.png');  
  c1Img = loadImage('https://thao-nguyen-design.github.io/sketch/character1.png');
  c2Img = loadImage('https://thao-nguyen-design.github.io/sketch/character2.png');
  c3Img = loadImage('https://thao-nguyen-design.github.io/sketch/character3.png');
  c4Img = loadImage('https://thao-nguyen-design.github.io/sketch/character4.png');
  c5Img = loadImage('https://thao-nguyen-design.github.io/sketch/character5.png');  
  mImg = loadImage('https://thao-nguyen-design.github.io/sketch/monster.gif');
  b1Img = loadImage('https://thao-nguyen-design.github.io/sketch/1.png');
  b2Img = loadImage('https://thao-nguyen-design.github.io/sketch/2.png');
  b3Img = loadImage('https://thao-nguyen-design.github.io/sketch/3.png');
  b4Img = loadImage('https://thao-nguyen-design.github.io/sketch/4.png');
  b5Img = loadImage('https://thao-nguyen-design.github.io/sketch/5.png');

}
function setup() {
  mode = 0;
  createCanvas(1000, 550);
  textSize(60);
  fill(255, 255, 255);
  resetSketch();
}


function resetSketch() {
  console.log("Restarting game");
  gameState="L0";
  score = 0;
  lost = false;
  obstacles = [];
  next = 0;
  dinosaur = new Dinosaur();
  new Obstacle();
  randint = int(random(50, 150));
  loop();
}

function keyPressed() {
  if (key == ' ') {
    dinosaur.jump();
    if (lost) {
      resetSketch();
    }
  }
}
  
function draw() {
   if (gameState=="L0"){
  levelZero();
   }
  //text((" " + score), width/2, 100);
  //background(b1Img);
  //image(c2Img, width/2, 50, 50, 50);
  if (gameState=="L1"){
  levelOne();
  } 
    if (gameState=="L2"){
  levelTwo();

  } 
      if (gameState=="L3"){
  levelThree();
  } 
       if (gameState=="L4"){
  levelFour();

  } 
         if (gameState=="L5"){
  levelFive();

  } 
        if (gameState=="L6"){
  levelSix();
        }
}
        
  function levelZero(){ 
  background(menuImg);
      if (keyCode===ENTER) {
          (gameState="L1");
     }
  }
        
        
  function levelOne(){ 
  background(b1Img);
  text((" " + score), 840, 70);
  //text("Level 1", width/2, height-30);
  next += 1;
  if (next == randint) {
    obstacles.push(new Obstacle());
    score += 1;
    next = 0;
    randint = int(random(40, width/5));
  }
  for (let o of obstacles) {
    if (o.x < 0) {
      if (obstacles.length > 3) {
        obstacles.shift();
      }
    }
    o.move();
    o.show();
     if (score >=6) {
  (gameState="L2");
}
  if (dinosaur.hits(o)) {
      console.log("Game Over!");
      background(gameoverImg);
      dinosaur.hide();
      obstacle.hide();
      lost = true;
      noLoop();
  }
  }
   dinosaur.show();
   dinosaur.move();
  }

  function levelTwo(){
      background(b2Img);
  text((" " + score), 840, 70);
  //text("Level 2", width/2, height-30);
  next += 1;
  if (next == randint) {
    obstacles.push(new Obstacle());
    score += 1;
    next = 0;
    randint = int(random(40, width/5));
  }
  for (let o of obstacles) {
    if (o.x < 0) {
      if (obstacles.length > 3) {
        obstacles.shift();
      }
    }
    o.move();
    o.show();
        if (score >=11) {
  (gameState="L3");
}
  if (dinosaur.hits(o)) {
      console.log("Game Over!");
      background(gameoverImg);
      lost = true;
      noLoop();
  }
  }
  dinosaur.show();
   dinosaur.move();
  }
  
   function levelThree(){ 
    background(b3Img);
  text((" " + score), 840, 70);
  //text("Level 3", width/2, height-30);
  next += 1;
  if (next == randint) {
    obstacles.push(new Obstacle());
    score += 1;
    next = 0;
    randint = int(random(40, width/5));
  }
  for (let o of obstacles) {
    if (o.x < 0) {
      if (obstacles.length > 3) {
        obstacles.shift();
      }
    }
    o.move();
    o.show();
        if (score >=16) {
  (gameState="L4");
}
  if (dinosaur.hits(o)) {
   console.log("Game Over!");
      background(gameoverImg);
      lost = true;
      noLoop();
  }
  }
   dinosaur.show();
   dinosaur.move();

  }
  
   function levelFour(){  
         background(b4Img);
  text((" " + score), 840, 70);
  //text("Level 4", width/2, height-30);
  next += 1;
  if (next == randint) {
    obstacles.push(new Obstacle());
    score += 1;
    next = 0;
    randint = int(random(40, width/5));
  }
  for (let o of obstacles) {
    if (o.x < 0) {
      if (obstacles.length > 3) {
        obstacles.shift();
      }
    }
    o.move();
    o.show();
        if (score >=21) {
  (gameState="L5");
}
  if (dinosaur.hits(o)) {
       console.log("Game Over!");
      background(gameoverImg);
      lost = true;
      noLoop();
  }
  }
  dinosaur.show();
  dinosaur.move();

  }
  
   function levelFive(){   
  background(b5Img);
  text((" " + score), 840, 70);
  //text("Level 5", width/2, height-30);
  next += 1;
  if (next == randint) {
    obstacles.push(new Obstacle());
    score += 1;
    next = 0;
    randint = int(random(40, width/5));
  }
  for (let o of obstacles) {
    if (o.x < 0) {
      if (obstacles.length > 3) {
        obstacles.shift();
      }
    }
    o.move();
    o.show();
        if (score >=26) {
  (gameState="L6");
}
  if (dinosaur.hits(o)) {
    console.log("Game Over!");
      background(gameoverImg);
      lost = true;
      noLoop();
  }
  }
  dinosaur.show();
  dinosaur.move();

  }
  
  function levelSix(){
    text("CONGRATS!", width/2, height/2);
  }