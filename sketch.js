function setup() {
  createCanvas(500, 400);
  trilhaSoundtrack.loop();
}

function draw() {
  background(streetImage);
  showPlayer();
  showCar();
  carMovement();
  playerMovement();
  carBackToStartingPosition();
  checkCollision();
  showPoints();
  scorePoint();
}


