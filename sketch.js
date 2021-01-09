var speed,weight,thickness
var bullet,wall

function setup(){
createCanvas(800,800);

speed=random(50,90);
weight=random(400,1500);
thickness=random(50,75);

bullet=createSprite(50,200,25,5);
bullet.velocityX=speed;

wall=createSprite(600,300,thickness,height/2);

}

function draw(){
  background(255);

if(isCollided(bullet,wall)){
  bullet.velocityX=0;

    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if( damage<10){
        wall.shapeColor=("red")      
    }

    if(damage>10){
        wall.shapeColor=("green");
    }
}




    drawSprites();
}

function isCollided(bullet1,wall1){
    
    var    bulletRightEdge=bullet1.x+bullet.width
    var    wallLeftEdge=wall1.x
        if(bulletRightEdge>=wallLeftEdge)
          {
              return true;
        }
        return false;
 }
