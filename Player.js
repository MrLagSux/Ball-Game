class player {
  constructor(x_, y_) {
    this.pos = createVector(x_, y_);
    this.vel = createVector(0, 0);
    this.acc = p5.Vector.random2D();
    this.h = 50;
  }

  update() {

    if (isLeft) this.pos.x -= spd;
    if (isRight) this.pos.x += spd;
    if (isDown) this.pos.y += spd;
    if (isUp) this.pos.y -= spd;

    let recordD = width * height;
    let index;

    for (let i = coins.length - 1; i > 0; i--) {
      let d = dist(this.pos.x, this.pos.y, coins[i].pos.x, coins[i].pos.y);
      if (d < recordD) {
        recordD = d;
        index = i;
      }
    }
    
    this.acc = p5.Vector.sub(coins[index].pos, this.pos);
    this.vel.add(this.acc);
    this.vel.limit(spd);
    this.pos.add(this.vel);
  }

  show() {
    if (this.pos.y > height - boxSize) fill(0);
    else fill(255);
    rect(this.pos.x, this.pos.y, this.h, this.h);
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = -this.h;
    } else if (this.pos.x < -this.h) {
      this.pos.x = width;
    }
    if (this.pos.y > height - boxSize - this.h) {
      this.pos.y = -this.h;
    } else if (this.pos.y < -this.h) {
      this.pos.y = height - boxSize - this.h;
    }
  }
}