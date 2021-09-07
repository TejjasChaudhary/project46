
function preload() {

 path=loadImage("../pink-path2.png");
 ladder=loadImage("../ladder.png");
 mario=loadImage("../mario.jpg");
 barrelimg = loadImage("../barrel-removebg-preview.png")
 console.log(barrelimg);

}


function setup() {
  createCanvas(800,600);

  floor1=createSprite(400, 550, 800, 30);

  //floor1.shapeColor = "pink"
  floor1.addImage(path)

  ladder1=createSprite(700, 430, 800, 10);
  ladder1.addImage(ladder);
  ladder1.scale = 0.8;

  floor2=createSprite(400, 350, 800, 30);
  floor2.addImage(path);

  ladder2=createSprite(100, 245, 800, 10);
  ladder2.addImage(ladder);
  ladder2.scale = 0.6;

  floor3=createSprite(400, 180, 800, 30);
  floor3.addImage(path);


  mario=createSprite(400, 500, 30, 30);
  edges = createEdgeSprites()
  //mario.addImage(mario);

  spawnBarrels();

}

function draw() {
  background(0,0,0);
  
 if(keyDown("RIGHT_ARROW")){
 
    //mario.velocityX = 10; 
    mario.x += 3;

  }
    if(edges[0].isTouching(mario)){

      mario.velocityX = 0;
      mario.x = 20;
      
   }

   if(edges[1].isTouching(mario) ){

    mario.velocityX = 0;
    mario.x = 780;
    
 }



   if(keyDown("LEFT_ARROW")){
 
    //mario.velocityX = 10; 
    mario.x -= 3;

      }

      if(mario.isTouching(ladder1) && mario.x >+ 700){
       
        mario.y = 300;
     
      }

      if(mario.isTouching(ladder2) && mario.x <+ 700){
    
        mario.y = 130;
      }

     // if(keyIsDown (RIGHT_ARROW)) {

    
     //   console.log()

      //}
  
  if(keyDown("space")) {
    mario.velocityY = -12;
  }

 
  


  drawSprites();
}
 
function spawnBarrels(){

  if(frameCount % 20 === 0){

    var barrel = createSprite(750,120);
    barrel.addImage ( barrelimg );
  barrel.scale = 0.1;
  barrel.rotation = 35

  barrel.velocityX = Math.random()*-10;
    

}




}