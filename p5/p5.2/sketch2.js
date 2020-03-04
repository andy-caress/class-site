function setup() {
  // put setup code here
  createCanvas(640, 480);
}

function draw() {
  background(255,0,0);
  // put drawing code here
  if (mouseIsPressed) {
    // fill(0,0,255);
    // rect(mouseX, mouseY, 80, 80);
    // fill(255, 0, 0);
    // ellipse(mouseX, mouseY, 100,100);

    fill(0,0,255);
    // line(mouseX, mousesY, width, 50);
    textAlign(LEFT, TOP);
    textSize(48);
    text("ANDY",
         constrain(mouseX, 0, width - textWidth("ANDY")),
      	 constrain(mouseY, 0, height - 48 + textDescent()));

  }
  else {
    fill(0,0,255);
  }
  ellipse(mouseX, mouseY, 80, 80);
  // background (255,0,0);
}
