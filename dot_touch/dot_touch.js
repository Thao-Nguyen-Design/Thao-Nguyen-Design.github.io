var score =0;
var gameState= "L1";
var pika;
var pikax = 300;
var pikay = 300;
var arti;
var char;
var eevee;
var meo;
var squi;
var artix = 300;
var artiy = 300;
var pokeball;

function preload() {
  pika = loadImage('https://thao-nguyen-design.github.io/dot_touch/pika.png');
  arti = loadImage('https://thao-nguyen-design.github.io/dot_touch/arti.png');
  char = loadImage('https://thao-nguyen-design.github.io/dot_touch/char.png');
  eevee = loadImage('https://thao-nguyen-design.github.io/dot_touch/eevee.png');
  meo = loadImage('https://thao-nguyen-design.github.io/dot_touch/meo.png');
  squi = loadImage('https://thao-nguyen-design.github.io/dot_touch/squi.png');
  pokeball = loadImage('https://thao-nguyen-design.github.io/dot_touch/pokeball.png');

}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup

function draw() {
  background(250,232,9);
  text(("Pokémon #" + score), width/2, 40);
  imageMode(CENTER);
  image(pokeball, mouseX, mouseY, 80, 80);
  image(pika);
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
  }     if (gameState=="L5"){
  levelFive();
  }     if (gameState=="L6"){
  levelSix();
  } 
    }     if (gameState=="L7"){
  levelSeven();
} // end draw

function levelOne(){
  text("Gotta Catch Them All!", width/2, height-30);
  image(pika, pikax, pikay, 100, 100);
  var distToBall= dist(pikax, pikay, mouseX, mouseY);
  if (distToBall <pikaSize/2){
    pikax = random(width);
    pikay= random(height);
    score= score +1;
  }
if (score >=1) {
  (gameState="L2");
}
}

function levelTwo(){
  text("Gotta Catch Them All!", width/2, height-30);
  image(arti, artix, artiy, 100, 100);
  var distToBall= dist(pikax, pikay, mouseX, mouseY);
  if (distToBall <pikaSize/2){
    pikax = random(width);
    pikay= random(height);
    score= score +1;
  }
if (score >=2) {
  (gameState="L3");
}
}
function levelThree(){
  text("Gotta Catch Them All!", width/2, height-30);
  image(char, charx, artiy, artiSize, artiSize);
  var distToBall= dist(pikax, pikay, mouseX, mouseY);
  if (distToBall <pikaSize/2){
    pikax = random(width);
    pikay= random(height);
    score= score +1;
  }
if (score >=2) {
  (gameState="L3");
}
}
  function levelSeven(){
    if(score >=6) {
    text("CONGRATS! You Got Them All!", width/2, height/2);
  image(pika, 50, 340, 50, 50);
  image(arti, 100, 340, 50, 50);
  image(char, 150, 340, 50, 50);
  image(eevee, 200, 340, 50, 50);
  image(meo, 250, 340, 50, 50);
  image(squi, 300, 340, 50, 50);

  }
  }