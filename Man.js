class Man {
    constructor() {
        this.image = loadImage("Images/Man.png");

    }
    display() {
        imageMode(CENTER);
        //;
        image(this.image, 720, 220, 70, 70);
    }
}



