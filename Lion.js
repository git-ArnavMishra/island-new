class Lion {
  constructor(x, y, w, h) {
    this.image = loadImage("Images/LiOn.png");
    //this.image = createImg("Images/LIONGIF.gif");
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  display() {
    imageMode(CENTER);
    //this.image.position(this.x, this.y);
    //this.image.size(this.x, this.y);
    image(this.image,this.x,this.y,this.w,this.h);
  }
}