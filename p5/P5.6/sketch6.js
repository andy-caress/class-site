var particle;
var r;
var g;
var b;
var a;

function setup() {
  // Setup happens ONCE!
  // put setup code here
  createCanvas(1680, 4000);
  particle = new Particle(300,300);
  background(r, g, b, a);

}

function draw() {
// background(0);
// Draw is a constant loop, the cpu is always redrawing
r = random(255); // r is a random number between 0 - 255
g = random(100,200); // g is a random number betwen 100 - 200
b = random(100); // b is a random number between 0 - 100
a = random(200,255); // a is a random number between 200 - 255
 frameRate(20);
 fill(random(r, g, b, a));
 var x = map(mouseX, mouseY, width, -300, 500);
 curveTightness(x);
 beginShape();
 curveVertex(10, 26);
 curveVertex(50, 16);
 curveVertex(63, 24);
 curveVertex(83, 61);
 curveVertex(10,105);
 curveVertex(5, 15);
 fill(r, g, b, a);
 endShape();

  noStroke();
  fill(r, g, b, a);
  ellipse(mouseX, mouseY, 100, 100);
  // particle.update();
  // particle.show();
  }

function mousePressed() {
  background(r, g, b, a);
}
