class Obstacle {
 
  constructor() {
    this.h = 70;
    this.w = 70;
    this.x = width;
    this.y = height - this.h;
  }
  
  move() {
    this.x -= 9;
  }
  
  
show (){
  image(tImg, this.x, this.y, this.w, this.h);
  //fill(255, 50);
  //ellipseMode(CORNER);
  //ellipse(this.x, this.y, this.r, this.r);
}
  
}
