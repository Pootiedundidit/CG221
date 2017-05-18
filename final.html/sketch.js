function setup(){
  createCanvas( windowWidth, windowHeight, WEBGL);
}
//var img;
//function preload() {
  //img = loadImage("src/paint1.gif");
//}
//function setup() {
  //image(img, 0, 0);
//}

function draw(){

  //move your mouse to change light direction
  var dirX = (mouseX / width - 0.5) *2;
  var dirY = (mouseY / height - 0.5) *(-2);
  directionalLight(247, 205, 236, 70, dirX, dirY, 0.25);
  ambientMaterial(221, 247, 205, 60);

 if (keyIsPressed === true){
  directionalLight(247, 205, 236, 70, dirX, dirY, 0.25);
} else {
   ambientMaterial(221, 247, 205, 60);
}

//speed of 3d doodles
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.02);


//3d shapes
  torus(80, 20, 50, 10);
  torus(160, 40, 100, 20);
  torus(mouseX, mouseY, 20, 40)
  sphere(35);
  }
