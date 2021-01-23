var topImage;
var man;
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
  
  man = new Man();
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