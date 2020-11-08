var pika;
var pokeball;
var pokeballImg;
var score =0;

function preload() {
  pokeballImg = loadImage('http://thao-nguyen-design.github.io/dot_touch/pokeball.png');
  pikaImg = loadImage('http://thao-nguyen-design.github.io/dot_touch/pika.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
 pokeball = createSprite(width/2, height/2);
 pokeball.addImage(pokeballImg);
}
function draw() {
  background(0);
  pokeball.position.x = mouseX;
  pokeball.position.y = mouseY;
  if (mouseIsPressed) {
    pokeball.rotation += 2;
  }
  drawSprites();
}
