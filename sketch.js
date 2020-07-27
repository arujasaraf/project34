//Create variables here
var dog,dogImg
 var happyDogImg, database, foodS, foodStock;
function preload()
{  
dogImg=loadImage("images/dogImg.png")
happyDogImg=loadImage("images/dogImg1.png")
  //load images here
}

function setup() {
  database = firebase.database()
  createCanvas(600, 600);
  Dog = createSprite (300,300,10,10)
  Dog.addImage(dogImg);
  
  foodStock  = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyDown(UP_ARROW))
{
  writeStock(foodS);
 Dog.addImage(happyDogImg);



}
  drawSprites();
  textSize(25)
        fill("white")
  text("press up arrow key to feed drago milk!",15,20)
  //add styles here

}
function readStock(data)
{
  foodS = data.val();

}
function writeStock(x)
{
  if(x<=0)
  {
    x=0;
  }
  else{
    x=x-1;
  }



  database.ref('/').update({
    Food:x
  })
}

