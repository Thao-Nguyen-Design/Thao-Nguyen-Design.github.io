class Obstacle {
 
  constructor() {
    this.h = 100;
    this.w = 100;
    this.x = width;
    this.r = 220;
    this.y = height - this.r;
  }
  
  move() {
    this.x -= 13;
  }
  
  
show (){
  image(tImg, this.x, this.y, this.w, this.h);
  //fill(255, 50);
  //rect(this.x, this.y, this.w, this.h);
  //ellipseMode(CORNER);
  //ellipse(this.x, this.y, this.r, this.r);
}
  
}
