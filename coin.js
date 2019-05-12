class Coin {
	constructor(x_, y_) {
		this.pos = createVector(x_, y_);
		this.speed = createVector(0, random(minSpeed, maxSpeed));
		this.d = 10;
	}
	
	show() {
		push();
		noStroke();
		let col = map(this.pos.y, height, 0, 100, 255);
		fill(col, col, 255);
		ellipse(this.pos.x, this.pos.y, this.d, this.d);
		pop();
	}
	
	update(){
		this.pos.add(this.speed);
	}
}