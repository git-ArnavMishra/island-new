var man;
var lion1;
var lion2;
var lion3;
var lionAnimation;
var bar;
var lion4;
var water1;
var water2;
var water3;
var coconut1;
var coconut2;
var coconut3;
var cellphone;
var gameState = 1;
var playButton;
var playButtonImage;
var dltMapIMG;
var bg;
var cam;

function preload(){
  playButtonImage = loadImage("Images/playButton.jpg");
  
  //dtlMapIMG = loadImage("Images/dtlMap.png");
  
  
}
function setup() {
  createCanvas(displayWidth-200,displayHeight-240);
  //topImageSprite = createSprite((displayWidth-200)/2, (displayHeight-200)/2,displayWidth-200,displayHeight-240);
   
  //image(topImage, (displayWidth-200)/2, (displayHeight-200)/2,displayWidth-200,displayHeight-240);
  bg = new Bg((displayWidth-200)/2, (displayHeight-200)/2,displayWidth-200,displayHeight-240);
  man = new Man(400,400,80,80);
  lion1 = new Lion(800,160,80,90);
  bar = new Bar((man.x)-80,(man.y)+50,100,8,100);
  lion2 = new Lion(1000,500,80,90);
  lion3 = new Lion(480,100,80,90);
  lion4 = new Lion(1200,400,80,90);
  water1 = new Water(1300,300,25,50,100);
  water2 = new Water(800,500,25,50,100);
  water3 = new Water(900,280,25,50,100);
  coconut1 = new Coconut(700,280,100,70,100);
  coconut2 = new Coconut(800,300,100,70,100);
  coconut3 = new Coconut(900,200,100,70,100);
  cellphone = new Cellphone(1000,400,100,70);
  playButton = createSprite((displayWidth-200)/2,displayHeight-440);
  playButton.addImage(playButtonImage);
  playButton.scale = 0.5;
}

function draw() {
  background(0,0,0);
  if(gameState===1){
   // topImageSprite = createSprite((displayWidth-200)/2, (displayHeight-200)/2,displayWidth-200,displayHeight-240);
    //topImageSprite.addImage('BG', topImage);
    bg.display();

    textSize(100);
    //text("The Island",200,200);


    lion1.display();
    lion2.display();
    lion3.display();
    lion4.display();
    water1.display();   

    water2.display(); 
    water3.display();
    coconut1.display();
    coconut2.display();
    coconut3.display();
    cellphone.display();
    man.display();





    if(mousePressedOver(playButton)){
      gameState = 2;
      camera.zoom = camera.zoom + 5;
      playButton.destroy();
      
    }
  }
    if(gameState===2){
      bg.display();
      if ((Math.abs(man.y-lion1.y)<90) && (Math.abs(man.x-lion1.x)<90)) { 
        if(!bar.isweakened()){
          bar.weaken();
        }
      }
      if ((Math.abs(man.y-lion2.y)<90) && (Math.abs(man.x-lion2.x)<90)) { 
        if(!bar.isweakened()){
          bar.weaken();
        }
      }
      if ((Math.abs(man.y-lion3.y)<90) && (Math.abs(man.x-lion3.x)<90)) { 
        if(!bar.isweakened()){
          bar.weaken();
        }
      }
      if ((Math.abs(man.y-lion4.y)<90) && (Math.abs(man.x-lion4.x)<90)) { 
        if(!bar.isweakened()){
          bar.weaken();
        }
      }
      if((Math.abs(man.y-coconut1.y)<90) && (Math.abs(man.x-coconut1.x)<90)) { 
        if(!bar.isstrengthened()){
          bar.strengthen();
          coconut1.destroy();
         }
      }

      if((Math.abs(man.y-coconut2.y)<90) && (Math.abs(man.x-coconut2.x)<90)) { 
        if(!bar.isstrengthened()){
          bar.strengthen();
          coconut2.destroy();

         }
      }
      if((Math.abs(man.y-coconut3.y)<60) && (Math.abs(man.x-coconut3.x)<60)) { 
        if(!bar.isstrengthened()){
          bar.strengthen();
          coconut3.destroy();

         }
      }
      //;
      if((Math.abs(man.y-water1.y)<60) && (Math.abs(man.x-water1.x)<60)) { 
        if(!bar.isstrengthened()){
          bar.strengthen();
          water1.destroy();

         }
      }
      if((Math.abs(man.y-water2.y)<60) && (Math.abs(man.x-water2.x)<60)) { 
        if(!bar.isstrengthened()){
          bar.strengthen();
          water1.destroy();
         }
      }
      if((Math.abs(man.y-water3.y)<60) && (Math.abs(man.x-water3.x)<60)) { 
        if(!bar.isstrengthened()){
          bar.strengthen();
          water1.destroy();
         }
      }


    lion1.display();
    lion2.display();
    lion3.display();
    lion4.display();
    water1.display();   
    water2.display();
    water3.display();
    coconut1.display();
    coconut2.display();
    coconut3.display();
    cellphone.display();
    man.display();
    bar.display();

    
    camera.position.x = man.x ;
    camera.position.y = man.y ;
    if(keyCode == 97 || keyCode == 65){
      man.y = man.y - 2;  
    }
    if(keyCode == UP_ARROW){
      man.y = man.y - 2;
    }   
    if(keyCode == DOWN_ARROW){
      man.y = man.y + 2;
    }   
    if(keyCode == LEFT_ARROW){
      man.x = man.x - 2;
    }   
    if(keyCode == RIGHT_ARROW){
      man.x = man.x + 2;    }   
      //;
      if(keyCode == UP_ARROW){
        bar.y = bar.y - 2;
      }   
      if(keyCode == DOWN_ARROW){
        bar.y = bar.y + 2;
      }   
      if(keyCode == LEFT_ARROW){
        bar.x = bar.x - 2;
      }   
      if(keyCode == RIGHT_ARROW){
        bar.x = bar.x + 2;
      }   


    
    

    }
  drawSprites();
}