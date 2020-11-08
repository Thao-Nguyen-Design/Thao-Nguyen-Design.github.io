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

var bul;
var bulx = 300;
var buly = 300;
var bulSize = 100;

var squi;
var squix = 300;
var squiy = 300;
var squiSize = 100;

var arti;
var artix = 300;
var artiy = 300;
var artiSize = 100;

var pokeball;
var pokeballSize = 90;
var bg;

function preload() {
  pika = loadImage('https://thao-nguyen-design.github.io/dot_touch/pika.png');
  arti = loadImage('https://thao-nguyen-design.github.io/dot_touch/arti.png');
  charm = loadImage('https://thao-nguyen-design.github.io/dot_touch/charm.png');
  eevee = loadImage('https://thao-nguyen-design.github.io/dot_touch/eevee.png');
  bul = loadImage('https://thao-nguyen-design.github.io/dot_touch/bul.png');
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
  text(("Pokémon #" + score), width/2, 50);
  imageMode(CENTER);
  image(pokeball, mouseX, mouseY, pokeballSize, pokeballSize);
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
  image(arti, artix, artiy, 120, 120);
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
  image(eevee, eeveex, eeveey, 110, 110);
  var distToBall= dist(eeveex, eeveey, mouseX, mouseY);
  if (distToBall <eeveeSize/2){
    bulx = random(width);
    buly= random(height);
    score= score +1;
  }
if (score >=4) {
  (gameState="L5");
}
}

function levelFive(){
  text("Gotta Catch Them All!", width/2, height-30);
  image(bul, bulx, buly, 150, 150);
  var distToBall= dist(bulx, buly, mouseX, mouseY);
  if (distToBall <bulSize/2){
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
    text("CONGRATS! You got them all!", width/2, height/2);
  image(pika, 120, 350, 70, 70);
  image(arti, 190, 350, 70, 70);
  image(charm, 260, 350, 70, 70);
  image(eevee, 330, 350, 70, 70);
  image(bul, 400, 350, 95, 95);
  image(squi, 470, 350, 70, 70);

  }
