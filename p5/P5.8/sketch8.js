var rect1 = {
  x:0,
  y:70,
  diameter:50
};

var circle2 = {
  x:0,
  y:100,
  diameter:90
};

function setup() {
  // Setup happens ONCE!
  // put setup code here
  createCanvas(1680, 800);
  // angleMode(DEGREES);
}

function draw() {
  background(0, 0, 255);
  fill(255, 0, 0);
  ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
  circle2.x = circle2.x + 5;
  circle2.y = circle2.y + 5;

  fill(255, 0, 0);
  strokeWeight(3);
  stroke (20);
  rect(rect1.x, rect1.y, rect1.diameter, rect1.diameter);
  rect1.x = rect1.x + 2;
  rect1.y = rect1.y + -.5;

  }

function mousePressed() {
  // background(r, g, b, a);
}
