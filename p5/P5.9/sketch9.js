var capture;
let angle = 0;

function setup() {
  // Setup happens ONCE!
  createCanvas(400, 400, WEBGL);
  capture = createCapture(VIDEO);
  capture.size(400, 300);
  noStroke();
}

function draw() {
  // background(0);
  ambientLight (100);
  directionalLight (255, 255, 255, 0, 0, 1);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 1.3);
  box (100);
  angle += 0.03;

  capture.loadPixels();
  var stepSize = 4;
  for (var x = 0; x < capture.width; x += stepSize) {
    for (var y = 0; y < capture.height; y += stepSize) {
      var index = ((y*capture.width) + x) * 4;
      var redVal = capture.pixels[index];
      var greenVal = capture.pixels[index + 1];
      var blueVal = capture.pixels[index + 2];
      fill(redVal, greenVal, blueVal);
      ellipse(x, y, stepSize, stepSize);
    }
  }


}

function mousePressed() {
  // background(r, g, b, a);
}
