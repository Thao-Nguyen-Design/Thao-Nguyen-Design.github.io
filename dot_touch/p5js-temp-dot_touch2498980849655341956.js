var score =0;
var gameState= "L1";

var pika;
var pikax = 300;
var pikay = 300;
var pikaSize =100;

var charm;
var charmx = 300;
var charmy = 300;
var charmSize = 100;

var eevee;
var eeveex = 300;
var eeveey = 300;
var eeveeSize = 100;

var meo;
var meox = 300;
var meoy = 300;
var meoSize = 100;

var squi;
var squix = 300;
var squiy = 300;
var squiSize = 100;

var arti;
var artix = 300;
var artiy = 300;
var artiSize = 100;

var pokeball;
var pokeballSize = 100;
var bg;

function preload() {
  pika = loadImage('https://thao-nguyen-design.github.io/dot_touch/pika.png');
  arti = loadImage('https://thao-nguyen-design.github.io/dot_touch/arti.png');
  charm = loadImage('https://thao-nguyen-design.github.io/dot_touch/charm.png');
  eevee = loadImage('https://thao-nguyen-design.github.io/dot_touch/eevee.png');
  meo = loadImage('https://thao-nguyen-design.github.io/dot_touch/meo.png');
  squi = loadImage('https://thao-nguyen-design.github.io/dot_touch/squi.png');
  pokeball = loadImage('https://thao-nguyen-design.github.io/dot_touch/pokeball.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(25);
} // end setup

function draw() {
  background(250,232,9);
  text(("Pokémon #" + score), width/2, 40);
  imageMode(CENTER);
  image(pokeball, mouseX, mouseY, 100, 100);
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
  } 
         if (gameState=="L5"){
  levelFive();
  } 
        if (gameState=="L6"){
  levelSix();
  }        if (gameState=="L7"){
  levelSeven();
  } 
} // end draw

function levelOne(){
  text("Gotta Catch Them All!", width/2, height-30);
  image(pika, pikax, pikay, pikaSize, pikaSize);
  var distToBall= dist(pikax, pikay, mouseX, mouseY);
  if (distToBall <pikaSize/2){
    artix = random(width);
    artiy= random(height);
    score= score +1;
  }
if (score >=1) {
  (gameState="L2");
}
}

function levelTwo(){
  text("Gotta Catch Them All!", width/2, height-30);
  image(arti, artix, artiy, 100, 100);
  var distToBall= dist(artix, artiy, mouseX, mouseY);
  if (distToBall <artiSize/2){
    charmx = random(width);
    charmy= random(height);
    score= score +1;
  }
if (score >=2) {
  (gameState="L3");
}
}

function levelThree(){
  text("Gotta Catch Them All!", width/2, height-30);
  image(charm, charmx, charmy, 100, 100);
  var distToBall= dist(charmx, charmy, mouseX, mouseY);
  if (distToBall <charmSize/2){
    eeveex = random(width);
    eeveey= random(height);
    score= score +1;
  }
if (score >=3) {
  (gameState="L4");
}
}

function levelFour(){
  text("Gotta Catch Them All!", width/2, height-30);
  image(eevee, eeveex, eeveey, 100, 100);
  var distToBall= dist(eeveex, eeveey, mouseX, mouseY);
  if (distToBall <eeveeSize/2){
    meox = random(width);
    meoy= random(height);
    score= score +1;
  }
if (score >=4) {
  (gameState="L5");
}
}

function levelFive(){
  text("Gotta Catch Them All!", width/2, height-30);
  image(meo, meox, meoy, 100, 100);
  var distToBall= dist(meox, meoy, mouseX, mouseY);
  if (distToBall <meoSize/2){
    squix = random(width);
    squiy= random(height);
    score= score +1;
  }
if (score >=5) {
  (gameState="L6");
}
}

function levelSix(){
  text("Gotta Catch Them All!", width/2, height-30);
  image(squi, squix, squiy, 100, 100);
  var distToBall= dist(squix, squiy, mouseX, mouseY);
  if (distToBall <squiSize/2){
    squix = random(width);
    squiy= random(height);
    score= score +1;
  }
if (score >=6) {
  (gameState="L7");
}
}

  function levelSeven(){
    if(score >=6) {
    text("CONGRATS! You Got Them All!", width/2, height/2);
  image(pika, 100, 340, 50, 50);
  image(arti, 150, 340, 50, 50);
  image(charm, 200, 340, 50, 50);
  image(eevee, 250, 340, 50, 50);
  image(meo, 300, 340, 50, 50);
  image(squi, 350, 340, 50, 50);

  }
  }
