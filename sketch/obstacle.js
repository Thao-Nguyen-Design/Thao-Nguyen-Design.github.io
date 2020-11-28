class Obstacle {
 
  constructor() {
    this.h = 120;
    this.w = 120;
    this.x = width;
    this.r = 240;
    this.y = height - this.r;
  }
  
  move() {
    this.x -= 9;
  }
  
  
show (){
  image(tImg, this.x, this.y, this.w, this.h);
  //fill(255, 50);
  //rect(this.x, this.y, this.w, this.h);
  //ellipseMode(CORNER);
  //ellipse(this.x, this.y, this.r, this.r);
}
  
}
