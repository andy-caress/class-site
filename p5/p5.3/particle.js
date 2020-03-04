var gravity = 0.1;

function Particle (x, y) {
  this.x = x;
  this.y = y;

  this.yspeed = 0;

  this.update = function(){
    this.y += this.yspeed;
    this.yspeed += gravity;

    if (this.y > height){
      this.y = height;
      this.yspeed *= -0.5;
    }
  }

  this.show = function(){
    fill(255,0,0);
    rect(this.x, this.y, 24, 24);
  }
}
