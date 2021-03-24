//Create variables here
var dog,happyDog;
var dogImg,happyDogImg,hungryImg;
var database;
var foodS,foodStock;
var milk;
var feed,addFood;
var fedTime,lastFed;
var foodObj;

function preload()
{
	//load images here
  dogImg=loadImage("images/Dog.png");
  happyDogImg=loadImage("images/happydog.png");
  hungryImg=loadImage("images/doglmg1.png");
  milk=loadImage("images/Milk.png");
}

function setup() {
	createCanvas(500, 500);

  dog=createSprite(400,150,20,20);
  dog.addImage("dogImg");

  foodStock=database.ref('food');
  foodStock.on("value",readStock);

  obj=new Food(200,180,10,20);
feed=createButton("FEED THE DOG");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood=createButton("ADD FOOD");
addFood.position(700,95);
addFood.mousePressed(addFoods);

}


function draw() {  
background(46,139,87);
fedTime=database.ref('FeedTime');
fedTime.on("value",function(data) {
lastFed=data.val();
})

fill(255,255,254);
textSize(15);

if("LAST FED:"+lasFed%12+"PM",350,30);

else if{
  text ("Last Feed:12Am",350,30);
}
else{
  text("lastFeed :"+lastFed+"AM",350,30);
}

function feedDog(){
  happyDog.addImage(happyDogImg);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getStock(),
    FeedTime:hour ()
  })
}
  drawSprites();
  //add styles here
text ("PRESS UP ARROW TO FEED THE DOG")
textSize(20);
fill ("white");
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}


