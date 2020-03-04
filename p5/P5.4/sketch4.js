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
  background(0,0,255);

}

function draw() {
  // Draw is a constant loop, the cpu is always redrawing
  stroke(0,0,0,0);
  particle.update();
  particle.show();
  r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200,255); // a is a random number between 200 - 255

  }

function mousePressed() {
  background(r, g, b, a);
}
