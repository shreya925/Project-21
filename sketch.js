var speed, weight, bullet, wall, thickness, damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);

  weight = random(30, 52);

  bullet = createSprite(50, 200, 20, 5);
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = color(80, 80, 80);

  thickness = random(22, 83);
}

function draw() { 
  background("black");
  drawSprites();
  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if(damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }
    if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  }

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  } return false;
}
}