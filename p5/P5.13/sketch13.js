const grSize = canvasSize;

function setup() {
  createCanvas(1710, 1500, WEBGL);
}

function draw() {
  background('#ff0000');
  rotateY(frameCount * 0.05);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * .001 + j) * 50,
        sin(frameCount * 0.001 + j) * 50,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);
      push();
      ellipse(200, 6, 4);
      stroke('#0000ff');
      pop();
    }
    pop();
  }
}
