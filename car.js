//car variables
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let speedCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
let carWidth = 50;
let carHeight = 40;


function showCar(){
    for(let i = 0; i < carImages.length; i++) {
      image(carImages[i], xCars[i], yCars[i], carWidth, carHeight);
    }
}

function carMovement(){
  for (let i = 0; i < carImages.length; i++){
      xCars[i] -= speedCars[i];
  }
}

function carBackToStartingPosition () {
  for (let i = 0; i < carImages.length; i++){
    if (passedThroughAllTheScreen(xCars[i])){
    xCars[i] = 600;
    }
  }
}

function passedThroughAllTheScreen(xCars){
  return xCars < - 50;
}
