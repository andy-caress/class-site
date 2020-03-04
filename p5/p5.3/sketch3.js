var particle;

function setup() {
  // put setup code here
  createCanvas(640, 480);
  particle = new Particle(300,300);
  background(0,0,255);
}

function draw() {

  particle.update();
  particle.show();
  }
