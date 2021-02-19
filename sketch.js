var canvas;
var music;
var ball;
var surface1,surface2,surface3,surface4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
 canvas = createCanvas(800,600);

   //create box sprite and give velocity
   ball=createSprite(100,100,50,50);
   ball.shapeColor=("blue");
   ball.velocityX=-3;
   ball.shapeColor=("gray");
    //create 4 different surfaces
   surface1=createSprite(90,590,200,20);
   surface1.shapeColor=("red");
   surface2=createSprite(290,590,200,20);
   surface2.shapeColor=("pink");
   surface3=createSprite(495,590,200,20);
   surface3.shapeColor=("green");
   surface4=createSprite(700,590,200,20);
   surface4.shapeColor=("blue");
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
   

    //add condition to check if box touching surface and make it box
   



    drawSprites();
}
function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 +object1 .width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2)
// bounceoff
function bounceOff(object1,object2){
if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 +object1 .width/2){
    object1.velocityX=object1.velocityX*(-1);
  }



