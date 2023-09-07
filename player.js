//player variables

let xPlayer = 86;
let yPlayer = 366;
let collision = false;
let myPoints = 0;


function showPlayer(){
    image(playerImage, xPlayer, yPlayer, 30, 30);
}

function playerMovement(){
  if (keyIsDown(UP_ARROW)) {
    yPlayer -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(playerCanMove()){
    yPlayer += 3;
    }
  }
}

function checkCollision(){
  for (let = i = 0; i < carImages.length; i++){
      collision = collideRectCircle(xCars[i], yCars[i], carWidth, carHeight, xPlayer, yPlayer, 15)
      if (collision){
      playerBackToInitialPosition();
      collisionSoundtrack.play();
        if (pointsAreHigherThanZero()){
      myPoints -= 1;
      }
    }
  }
}

function playerBackToInitialPosition(){
  yPlayer = 366;
}

function showPoints(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 102, 140));
  text(myPoints, width / 5, 26);
}

function scorePoint(){
  if (yPlayer < 14){
    myPoints += 1;
    playerBackToInitialPosition();
    pointsSoundtrack.play();
  }
}

function pointsAreHigherThanZero(){
  return myPoints > 0;
}

function playerCanMove(){
  return yPlayer < 366;
}