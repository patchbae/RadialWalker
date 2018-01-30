// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var painters = []; 

var r, g, b;
let step = 5;

function setup() {
  for (var i=0; i < 51; i++){
    painters.push(new Walker());
  }
	createCanvas(displayWidth, displayHeight);
	background(0);
	smooth();
}

function draw() {
	for (var i=0; i<painters.length; i++) {
    painters[i].display();
    painters[i].walk();
    painters[i].randomColor();
  }
}

function mouseClicked(){
  painters.push(new Walker());
}
  
class Walker {
	constructor() {
		this.position1 = createVector(width/2, height/2);
    this.position2 = createVector(width/2, height/2);
		this.noff = createVector(random(1000), random(1000));
		this.r = random(127);
		this.g = 0;
		this.b = random(127);
	}

	display() {
		strokeWeight(1);
		fill(this.r, this.g, this.b, 127);
		stroke(this.r, 0, this.b, 25);
    //point(this.position.x, this.position.y);
    line(this.position1.x, this.position1.y, this.position2.x, this.position2.y);
		//ellipse(this.position.x, this.position.y, 12, 12);
	}

	walk() {
		this.position1.x = map(noise(this.noff.x), 0, 1, 0, width);
		this.position1.y = map(noise(this.noff.y), 0, 1, 0, height);
    this.position2.x = map(noise(this.noff.x), 1, 0, 0, width);
    this.position2.y = map(noise(this.noff.y), 1, 0, 0, height);
		this.noff.add(0.001, 0.001, 0);
	}

	randomColor() {

		var count = floor(random(2));
		switch (count) {
				

			case 0:
				
				if (this.r > -1 && this.r < 256) {
					this.r = this.r + floor(random(step));
				} else if (this.r <= 0) {
					this.r = this.r + floor(random(step));
				} else if (this.r >= 256) {
					this.r = this.r - floor(random(step));
				}


				if (this.g > -1 && this.g < 256) {
					this.g = this.g + floor(random(step));
				} else if (this.g <= 0) {
					this.g = this.g + floor(random(step));
				} else if (this.g >= 256) {
					this.g = this.g - floor(random(step));
				}

				if (this.b > -1 && this.b < 256) {
					this.b = this.b + floor(random(step));
				} else if (this.b <= 0) {
					this.b = this.b + floor(random(step));
				} else if (this.b >= 256) {
					this.b = this.b - floor(random(step));
				}

				break;

			case 1:
				if (this.r > -1 && this.r < 256) {
					this.r = this.r - floor(random(step));
				} else if (this.r <= 0) {
					this.r = this.r + floor(random(step));
				} else if (this.r >= 256) {
					this.r = this.r - floor(random(step));
				}


				if (this.g > -1 && this.g < 256) {
					this.g = this.g - floor(random(step));
				} else if (this.g <= 0) {
					this.g = this.g + floor(random(step));
				} else if (this.g >= 256) {
					this.g = this.g - floor(random(step));
				}

				if (this.b > -1 && this.b < 256) {
					this.b = this.b - floor(random(step));
				} else if (this.b <= 0) {
					this.b = this.b + floor(random(step));
				} else if (this.b >= 256) {
					this.b = this.b - floor(random(step));
				}
				break;
		}
	}
}