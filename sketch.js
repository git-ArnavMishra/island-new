var topImage;
var man;
var lion1;
var lion2;
var lion3;
var lion4;
var water1;
var water2;
var water3;
var coconut1;
var coconut2;
var coconut3;
var cellphone;
var gameState = 0;
var playButton;
var playButtonImage;
var dltMapIMG;
function preload(){
  topImage = loadImage("Images/Islandasdf.jpg");
  playButtonImage = loadImage("Images/playButton.jpg");
  dtlMapIMG = loadImage("Images/dtlMap.png");
}
function setup() {
  createCanvas(displayWidth-200,displayHeight-240);
  man = new Man(400,400,80,80);
  lion1 = new Lion(800,160,80,80);
  lion2 = new Lion(1000,500,80,80);
  lion3 = new Lion(480,100,80,80);
  lion4 = new Lion(1200,400,80,80);
  water1 = new Water(1300,300,25,50);
  water2 = new Water(800,500,25,50);
  water3 = new Water(900,280,25,50);
  coconut1 = new Coconut(700,280,100,70);
  coconut2 = new Coconut(800,300,100,70);
  coconut3 = new Coconut(900,200,100,70);
  cellphone = new Cellphone(1000,400,100,70);
  playButton = createSprite((displayWidth-200)/2,displayHeight-440);
  playButton.addImage(playButtonImage);
  playButton.scale = 0.5;
}



function draw() {
  background(topImage);
  if(gameState===0){
    textSize(100);
    text("The Island",200,200);
    man.display();
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

    if(mousePressedOver(playButton)){
      gameState = 1;
      playButton.destroy();
    }
  }
  else if(gameState===1){
    console.log("asdf");
    background(dltMapIMG);
  } 
  else if(gameState===2){

  } 
  drawSprites();
}