var bullet,wall;
var weight,speed,thickness;
function setup() {
  createCanvas(1200,400);
 wall=createSprite(1000, 200, thickness,height/2);
 bullet=createSprite(50, 200, 50,20);
 speed=random(223,321)
 weight=random(30,52)
 thickness=random(22,83)
 bullet.velocityX=speed;
}

function draw() {
  background("black"); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2) {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509
    if(deformation>180){
      bullet.shapecolor="red"
    }
    if(deformation<180 && deformation>100){
      bullet.shapecolor="yellow"
    } 
    if(deformation<100){
      bullet.shapecolor="green"
    }
  }

   if(hasCollided(bullet,wall)){
     bullet.velocityX=0;
     var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
     if(damage>10){
       wall.shapeColor="red"
     }
     if(damage<10){
      wall.shapeColor="green"
    }
   }
  
  
  drawSprites();
  }
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}
