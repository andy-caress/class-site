const numShapes = 6;
let shps = [];
const msg = "CodeMotifiedFromDAEINCHUNG";
let boxCols = [];

function setup() {
  ratio = 5 / 8;
  const dim = calcDimensionFromRatio(ratio);
  // 1080 x 1920 = 540 x 960 = 390 x 640
  // canvas = createCanvas(dim.x, dim.y);
  canvas = createCanvas(windowWidth, windowHeight);
  // createCanvas(windowWidth, windowHeight);
  canvas.position((windowWidth - canvas.width) / 2, (windowHeight - canvas.height) / 2);
  noSmooth();
  w = width;
  h = height;
  for (let i = 0; i < numShapes; i++) {
    shps[i] = new Compound();
  }

  textFont('tundra');
  // textStyle(ITALIC);
  textAlign(LEFT, TOP);
  noStroke();

  loc = createVector(w / 2, h / 2);
  bgCol = color('#ff0000');
  txtCol = color('#0000ff');
  totalFrames = 30 * 12;

  if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        cancelButton.addEventListener('click', function() {})
      })
      .then(() => {})
  }

  function onAskButtonClicked() {
    DeviceOrientationEvent.requestPermission().then(response => {
      if (response === 'granted') {}
    }).catch(console.error);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgCol);
  noStroke();

  speed = frameCount / totalFrames * TWO_PI;

  push();

  const bw = w - (w * .125); // first box width
  const bh = h - (w * .125); // first box height

  for (let i = numShapes - 1; i >= 0; i--) {
    const lx = lerp(w / 2, loc.x, i / numShapes);
    const ly = lerp(h / 2, loc.y, i / numShapes);
    let shp = shps[i];
    shp.setContourRect(lx, ly, bw - (i * w * .13), bh - (i * h * .13));

    push();
    translate(w / 2, h / 2);
    fill(txtCol);
    if (i == 1) {
      textCircle(h * .15, h * .36, w * .16); //.14
    } else if (i == 3) {
      textCircle(h * .5, h * .2, w * .1); // .1
    }
    pop();
  }

  textStyle(NORMAL);
  textSize(w * .1);
  textAlign(CENTER, CENTER);
  fill(50, 50, 60);
}

function textCircle(wi, hi, tsz) {
  textAlign(CENTER, CENTER);
  textStyle(ITALIC);
  for (let i = 0; i < msg.length; i++) {
    const x = .7 * cos(i * TWO_PI / msg.length - speed) * wi;
    const y = 1.2 * sin(i * TWO_PI / msg.length - speed) * hi;
    push();
    translate(x, y);
    const angle = atan2(y, x);
    rotate(PI / 2 + angle);
    textSize(tsz);
    text(msg[(i + floor(tsz)) % msg.length], 0, 0);
    pop();
  }
}

function calcDimensionFromRatio(ratio) {
  const curRatio = windowWidth / windowHeight;
  let sz = createVector();
  if (curRatio > ratio) { // wide
    sz.y = windowHeight;
    sz.x = sz.y * ratio;
  } else { // tall
  }
  return createVector(sz.x, sz.y);
}

class Compound {
  constructor() {
    this.ct = createVector(); // center
    this.ctrW = 0;
    this.ctrH = 0;
  }

  setContourRect(cx, cy, w, h) {}
  display() {
    beginShape();
    beginContour();
  }
}
