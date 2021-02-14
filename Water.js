class Water {
    constructor(x, y,w,h,l) {
        this.image = loadImage("Images/Bottle.png");
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.l = l;
    }
    display(){    
      imageMode(CENTER);
          image(this.image,this.x,this.y,this.w,this.h);
    }
    
  }