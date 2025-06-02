class Bumi{
	constructor(radius, orbit, peta){
		this.r = radius;
		this.O = orbit;
		this.img = peta;
		
		this.sudut = TWO_PI;
	}
	
	show(){
		push();
		noStroke();
		sudut += sudut + O;
		rotate(this.sudut);
		fill(255);
		texture(this.img);
		sphere(this.r);
		pop();
	}
}

let bumi;
let petabumi;

function preload(){
	petabumi = loadImage('image/bumi.jpg');
}

function setup(){
	let canvas = createCanvas(800, 600, WEBGL);
	 canvas.elt.oncontextmenu = () => false;
	
	bumi = new Bumi(200, 0.01, petabumi);
}

function draw(){
	background(0);
	bumi.show();
	
}

