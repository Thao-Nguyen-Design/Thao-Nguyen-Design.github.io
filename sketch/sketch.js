let c1Img;
let c2Img;
let c3Img;
let c4Img;
let c5Img;
let tImg;
let bImg;
let obstacles;
let randint;
let score = 0;
let lost;
let next;
let spread;
var gameState= "L1";

function preload(){
  c1Img = loadImage('https://thao-nguyen-design.github.io/sketch/character1.png');
  c2Img = loadImage('https://thao-nguyen-design.github.io/sketch/character2.png');
  c3Img = loadImage('https://thao-nguyen-design.github.io/sketch/character3.png');
  c4Img = loadImage('https://thao-nguyen-design.github.io/sketch/character4.png');
  c5Img = loadImage('https://thao-nguyen-design.github.io/sketch/character5.png');  
  tImg = loadImage('https://thao-nguyen-design.github.io/sketch/train.png');
  bImg = loadImage('https://thao-nguyen-design.github.io/sketch/background.jpg');
}
function setup() {
  createCanvas(1200, 700);
  textSize(24);
  resetSketch();
}

function keyPressed() {
  if (key == ' ') {
    dinosaur.jump();
    if (lost) {
      resetSketch();
    }
  }
}

function resetSketch() {
  console.log("Restarting game");
  score = 0;
  lost = false;
  obstacles = [];
  next = 0;
  dinosaur = new Dinosaur();
  new Obstacle();
  randint = int(random(50, 150));
  loop();
}

function draw() {
  background(bImg);
  //image(c2Img, width/2, 50, 50, 50);
  text((" " + score), width/2, 50);
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

        
  function levelOne(){ 
  text("Level 1", width/2, height-30);
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
      text('GAME OVER', 250, 200);
      lost = true;
      noLoop();
  }
  }
   dinosaur.show();
   dinosaur.move();
  }

  function levelTwo(){ 
  text("Level 2", width/2, height-30);
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
      text('GAME OVER', 250, 200);
      lost = true;
      noLoop();
  }
  }
  dinosaur.show();
   dinosaur.move();
  }
  
   function levelThree(){   
  text("Level 3", width/2, height-30);
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
      text('GAME OVER', 250, 200);
      lost = true;
      noLoop();
  }
  }
   dinosaur.show();
   dinosaur.move();

  }
  
   function levelFour(){   
  text("Level 4", width/2, height-30);
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
      text('GAME OVER', 250, 200);
      lost = true;
      noLoop();
  }
  }
  dinosaur.show();
  dinosaur.move();

  }
  
   function levelFive(){   
  text("Level 5", width/2, height-30);
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
     text('GAME OVER', 250, 200);
      lost = true;
      noLoop();
  }
  }
  dinosaur.show();
  dinosaur.move();

  }
  
  function levelSix(){
    text("CONGRATS! You got them all!", width/2, height/2);
  }
