var score =0;
var gameState= "L1";
var pika;
var pikax = 300;
var pikay = 300;
var pikaSize = 100;
var arti;
var charm;
var eevee;
var meo;
var squi;
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
  createCanvas(1000, 600);
  textAlign(CENTER);
  textSize(25);
} // end setup

function draw() {
  background(250,232,9);
  text(("Pokémon #" + score), width/2, 40);
  imageMode(CENTER);
  image(pokeball, mouseX, mouseY, pokeballSize, pokeballSize);
  image(pika);
  if (gameState=="L1"){
  levelOne();
  } 
    if (gameState=="L2"){
  levelTwo();
  } 
} // end draw

function levelOne(){
  text("Gotta Catch Them All!", width/2, height-30);
  image(pika, pikax, pikay, pikaSize, pikaSize);
  var distToBall= dist(pikax, pikay, mouseX, mouseY);
  if (distToBall <pikaSize/2){
    pikax = random(width);
    pikay= random(height);
    score= score +1;
  }
if (score >=10) {
  (gameState="L2");
}
}
  function levelTwo(){
    if(score >=10) {
    text("CONGRATS! You Got Them All!", width/2, height/2);
  image(pika, 50, 340, 50, 50);
  image(arti, 100, 340, 50, 50);
  image(char, 150, 340, 50, 50);
  image(eevee, 200, 340, 50, 50);
  image(meo, 250, 340, 50, 50);
  image(squi, 300, 340, 50, 50);

  }
  }
