//game images

let streetImage;
let playerImage;
let carImage1;
let carImage2;
let carImage3;

//game soundtrack

let trilhaSoundtrack;
let collisionSoundtrack;
let pointsSoundtrack;


function preload(){
  streetImage = loadImage("images/estrada.png");
  playerImage = loadImage("images/ator-1.png");
  carImage1 = loadImage("images/carro-1.png");
  carImage2 = loadImage("images/carro-2.png");
  carImage3 = loadImage("images/carro-3.png");
  
  carImages = [carImage1, carImage2, carImage3, carImage1, carImage2, carImage3];
  
  trilhaSoundtrack = loadSound("soundtrack/trilha.mp3");
  collisionSoundtrack = loadSound("soundtrack/colidiu.mp3");
  pointsSoundtrack = loadSound("soundtrack/pontos.wav");
}