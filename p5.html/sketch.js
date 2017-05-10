function setup() {
 createCanvas(1000 , 1000);
}
function draw() {
 if (mouseIsPressed) {
 fill(776655);
 } else {
 fill(0, 126, 255, 102);
 }
 triangle(mouseX, mouseY, 120,190 ,200, 150);

}
