
class Dinosaur{
  constructor() {
    this.r = 100;
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2;
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -35;
    }
  }
  
  hits(obs) {
    return collideRectRect(this.x,this.y,this.r,this.r,obs.x,obs.y,obs.w,obs.h);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }
  
 
   show(){
       if (gameState=="L1"){
    image(c1Img,this.x, this.y, this.r, this.r);
   }
     
    if (gameState=="L2"){
    image(c2Img,this.x, this.y, this.r, this.r);
    }
      if (gameState=="L3"){
   image(c3Img,this.x, this.y, this.r, this.r);
      }
         if (gameState=="L4"){
   image(c4Img,this.x, this.y, this.r, this.r);
         }
         if (gameState=="L5"){
   image(c5Img,this.x, this.y, this.r, this.r);
         }
    //fill(255, 50);
    //ellipseMode(CORNER);
    //ellipsse(this.x, this.y, this.r, this.r);
   }
 }
