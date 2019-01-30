class Ball {
	constructor(x,y,speed) {
		this.x = x;
		this.y = y;
		this.speed = speed;

	}
	show(){
		noStroke();
		fill(255,bg,z);
		ellipse(this.x, this.y, 80, 80);
		fill(255,255,255);

  	ellipse(random(this.x-40,this.x+40),this.y,random(10),10,10);
		fill(0,0,0);
  	ellipse(this.x,random(this.y-40,this.y+40),10,random(10),10);


	}
	move(){
		this.y = this.y + this.speed;
		if (this.y >=windowHeight/2-windowHeight/4+windowHeight/2-40) {
    // y = windowHeight/2-windowHeight/4+40;
    this.speed =-6;

  }
  else if(this.y<windowHeight/2-windowHeight/4+40){
    this.speed = 3;
  }
	}
}
