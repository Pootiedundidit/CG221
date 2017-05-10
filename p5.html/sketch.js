function setup() {
 createCanvas(900 , 600);
}
function draw() {
 if (mouseIsPressed) {
 fill(776655);
 } else {
 fill(112);
 }
 ellipse(mouseX, mouseY, 60, 60);
}
