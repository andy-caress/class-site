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
g = random(255); // g is a random number betwen 100 - 200
b = random(255); // b is a random number between 0 - 100
a = random(255); // a is a random number between 200 - 255

  noStroke();
  fill(r, g, b, a);
  ellipse(mouseX, mouseY, 50, 20);
  // particle.update();
  // particle.show();
  }

function mousePressed() {
  background(r, g, b, a);
}
