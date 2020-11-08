var score =0;
var gameState= "L1";
var pika;
var pikax = 300;
var pikay = 300;
var pikaSize = 100;
var pokeball;
var pokeballSize = 80;

function preload() {
  pika = loadImage('https://thao-nguyen-design.github.io/dot_touch/pika.png');
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
  image(pokeball, mouseX, mouseY, pokeballSize, pokeballSize);
  if (mouseIsPressed) {
    pokeball.rotation += 2;
  }
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
  image(pika, 100, 340, 50, 50);
  image(pika, 150, 340, 50, 50);
  image(pika, 200, 340, 50, 50);
  image(pika, 250, 340, 50, 50);
  image(pika, 300, 340, 50, 50);
  image(pika, 350, 340, 50, 50);
  image(pika, 400, 340, 50, 50);
  image(pika, 450, 340, 50, 50);
  image(pika, 500, 340, 50, 50);

  }
  }
