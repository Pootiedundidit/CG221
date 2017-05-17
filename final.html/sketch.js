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

 if (keyIsPressed === true){
   fill(247, 205, 236);
 } else {
   fill(221, 247, 205);
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




  if (keyIsPressed === true){
    fill(237, 205, 236);
  } else {
    fill(121, 247, 205);
  }
