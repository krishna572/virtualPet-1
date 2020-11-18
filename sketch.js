//Create variables here
var dog,dogImg,dogeating;
var database,dogHappy;
var foodS = 0;
var foodStoke = 10;

function preload()
{
  //load images here
  dogImg = loadImage("images\dogImg.png");
  dogHappy = loadImage("images\dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  background(46, 139, 87);
  
}


function draw() {  

  drawSprites();
  //add styles here
  Text("food "+foodStoke,200,200);

  if (keyWentDown(up_arrow)) {
    
  }


}



