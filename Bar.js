class Bar {
    constructor(x,y,w,h,l) {
        this.image100 = loadImage("Images/HealthBar100.png");
        this.image80 = loadImage("Images/HealthBar40.png");
        this.image60 = loadImage("Images/HealthBar80.png");
        this.image40 = loadImage("Images/HealthBar40.png");
        this.image20 = loadImage("Images/HealthBar20.png");

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.l = l;
        this.alreadyweakened = false;

    }
    display(){    
      imageMode(CENTER);
      if(this.l == 100){
        image(this.image100,this.x,this.y,this.w,this.h);
      }
      if(this.l == 80){
        image(this.image80,this.x,this.y,this.w,this.h);
      }
      if(this.l == 60){
        image(this.image60,this.x,this.y,this.w,this.h);
      }
      if(this.l == 40){
        image(this.image40,this.x,this.y,this.w,this.h);
      }
      if(this.l == 20){
        image(this.image20,this.x,this.y,this.w,this.h);
      }
          
    }
    weaken(){    
      this.l = (this.l)-20;
      this.alreadyweakened = true;
      console.log(this.l);
    }
    isweakened(){    
      return this.alreadyweakened;
    }
  }