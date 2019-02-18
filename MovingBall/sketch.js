
var x, y,bg,z;
var f,speed=3;
var spot = {
  a:100,
  b:100
};
var col = {
  r:255,
  g:0,
  b:0
};

function setup() {
    createCanvas(windowWidth, windowHeight);
    // Starts in the middle
    x = windowWidth / 2;
    y = windowHeight/2-windowHeight/4+40;
    f = 40/Math.sqrt(2);


}

function draw() {

    bg = map(y,windowHeight/2-windowHeight/4+40,windowHeight/2-windowHeight/4+windowHeight/2-40,0,255);
    z = map(y,windowHeight/2-windowHeight/4+40,windowHeight/2-windowHeight/4+windowHeight/2-40,255,0);
    col.r = random(100,255);
    col.g = random(0,255);
    col.b = random(0,200);
    spot.a = x;
    spot.b = random(y-40,y+40);

    background(255,bg,z);
    for (var i = 0; i <= mouseX; i+=35) {
      for (var j = 0; j <= mouseY; j+=35) {
        fill(random(255));
        ellipse(i+z,j+bg,10,10,70);
      }

    }
  	fill(0,0,255);
    ellipse(random(0,width),random(0,height),20,20,10);
    if(mouseX>=windowWidth/2-windowWidth/8&&mouseX<=windowWidth/2+windowWidth/8&&mouseY>=windowHeight/2-windowHeight/4&&mouseY<=windowHeight/2+windowHeight/4){
      fill(255,0,0);
    }
    noStroke();
  	rectMode(CENTER);
		rect(windowWidth/2, windowHeight/2, windowWidth/4, windowHeight/2, 10);
    //fill(col.r,col.g,col.b);



    // ellipse(spot.a,spot.b,80,80,100);


		fill(255,bg,z);
    // Draw a circle
    // stroke(50);
    // fill(100);

    ellipse(x, y, 80, 80);


  // Jiggling randomly on the horizontal axis
  // x = x + random(-1, 1);
  // Moving up at a constant speed
  // speed = 3;
  y = y + speed;
  fill(0,0,0);
  ellipse(spot.a,spot.b,10,10,10);
  fill(255,255,255);

  ellipse(random(x-40,x+40),y,10,10,10);
  // ellipse(x,random(-f,f),10,10,10);



  // Reset to the bottom
  if (y >=windowHeight/2-windowHeight/4+windowHeight/2-40) {
    // y = windowHeight/2-windowHeight/4+40;
    speed =-6;

  }
  else if(y<windowHeight/2-windowHeight/4+40){
    speed = 3;
  }
  // speed++;
}
