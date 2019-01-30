let ball1,ball2,bg,z;
let balls = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
	x = windowWidth / 2;
  y = windowHeight/2-windowHeight/4+40;

	ball1 = new Ball(x,y,3);
}
function mousePressed(){
	let b = new Ball(mouseX,mouseY,3);
	balls.push(b);
}
function draw() {
	bg = map(ball1.y,windowHeight/2-windowHeight/4+40,windowHeight/2-windowHeight/4+windowHeight/2-40,0,255);
	z = map(ball1.y,windowHeight/2-windowHeight/4+40,windowHeight/2-windowHeight/4+windowHeight/2-40,255,0);
	background(255,bg,z);
	for (var i = 0; i <= width; i+=35) {
		for (var j = 0; j <= height; j+=35) {
			fill(random(255));
			ellipse(i,j,10,10,700);
		}

	}
	for (var i = 0; i < balls.length; i++) {
		balls[i].show();
		balls[i].move();
	}
	fill(0,0,255);
    ellipse(random(0,width),random(0,height),20,20,10);
    if(mouseX>=windowWidth/2-windowWidth/8&&mouseX<=windowWidth/2+windowWidth/8&&mouseY>=windowHeight/2-windowHeight/4&&mouseY<=windowHeight/2+windowHeight/4){
      fill(255,0,0);
    }


    noStroke();
  	rectMode(CENTER);
		rect(windowWidth/2, windowHeight/2, windowWidth/4, windowHeight/2, 10);

	ball1.show();
	ball1.move();

}
