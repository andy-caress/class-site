let angle = 0;
let love;

function setup() {
  createCanvas(400, 300, WEBGL);
    // graphics = createGraphics(300, 300);

    love = createGraphics(300, 300);
    // love.background(255, 100);
    love.fill(255);
    love.textAlign(CENTER);
    love.textSize(64);
    love.text('love', 150, 150);

}

function draw() {
  background(0);

  // graphics.fill (255, 0, 0);
  // graphics.ellipse (mouseX, mouseY), 20;
  // fill (255, 0, 0);
  ambientLight (100);
  directionalLight (255, 255, 255, 0, 0, 1);
  rotateX(angle);
  rotateY(mouseY);
  rotateZ(mouseX);
  //
  // box (100);
  texture(love);
  plane(300,300);

  angle += 0.03;
}
