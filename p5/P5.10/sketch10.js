let angle = 0;


function setup() {
  createCanvas(400, 400, WEBGL);
    background(0, 0, 255);
    graphics = createGraphics(200, 200);
    graphics.background (0, 0, 255);
}

function draw() {
  graphics.fill (255, 0, 0);
  graphics.ellipse (mouseX, mouseY), 20;
  fill (255, 0, 0);
  ambientLight (100);
  directionalLight (255, 255, 255, 0, 0, 1);
  rotateX(angle);
  rotateY(mouseY);
  rotateZ(mouseX);

  box (100);
  angle += 0.03;
}
