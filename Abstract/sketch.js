


function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw() {
	var i = 0,j=0,k=0,z=0;
	background(256);
	rectMode(CENTER);
	noStroke();
	fill(256);
	rect(windowWidth/2,windowHeight/2,1.2*windowWidth/2,windowHeight);
	fill(0);
	rect(windowWidth/2,windowHeight/2,2*windowWidth/4,windowHeight);

	fill(255);
	rect(windowWidth/2,windowHeight/2,2*windowWidth/5,windowHeight);



	while(z<100){
		fill(0);
		rect(windowWidth/2,windowHeight/2-windowHeight/5+2*windowWidth/300*z,windowWidth/6+windowWidth/10,2*windowWidth/300);
		z++;
		fill(256);
		rect(windowWidth/2,windowHeight/2-windowHeight/5+2*windowWidth/300*z,windowWidth/6+windowWidth/10,2*windowWidth/300);
		z++;

	}
	fill(209,61,52);
	rect(windowWidth/2,windowHeight/2-windowHeight/18,windowWidth/6,2*windowHeight/5);

	fill(0);
	while (k < 27) {
		fill(random(0,256),random(0,256),random(0,256));

		rect(windowWidth/2-windowWidth/12+windowWidth/300+windowWidth/100*k-windowWidth/20,0,windowWidth/150,4*windowHeight/6);
		fill(256);
		k++;
		rect(windowWidth/2-windowWidth/12+windowWidth/100*k-windowWidth/20,0,windowWidth/150,4*windowHeight/6);


}
	while (i < 27) {
		fill(0);

		rect(windowWidth/2-windowWidth/12+windowWidth/300+windowWidth/100*i-windowWidth/20,windowHeight,windowWidth/150,4*windowHeight/6);
		fill(256);
		i++;
		rect(windowWidth/2-windowWidth/12+windowWidth/100*i-windowWidth/20,windowHeight,windowWidth/150,4*windowHeight/6);


}

// fill(0);
// rect(windowWidth/2,windowHeight/2-windowHeight/18+windowHeight/5,windowWidth/6,windowWidth/200);
// fill(128);
// rect(windowWidth/2,windowHeight/2-windowHeight/18+windowHeight/5+windowWidth/200,windowWidth/6,windowWidth/200);
while(j<40){
	fill(0);
	rect(windowWidth/2,windowHeight/2-windowHeight/18+windowHeight/5+windowWidth/300*j,windowWidth/6+windowWidth/10,windowWidth/300);
	j++;
	fill(256);
	rect(windowWidth/2,windowHeight/2-windowHeight/18+windowHeight/5+windowWidth/300*j,windowWidth/6+windowWidth/10,windowWidth/300);
	j++;

}

fill(0);
for (var m = 0; m < 18; m++) {
	rect(windowWidth/2-windowWidth/24+windowWidth/200*m,windowHeight/2+windowHeight/5-2*windowHeight/18,windowWidth/300,2*windowHeight/10);

}
for (var m = 0; m < 5; m++) {
	rect(windowWidth/2-windowWidth/48+windowWidth/100*m,windowHeight/2+windowHeight/5-2*windowHeight/18,windowWidth/200,windowHeight/10);

}


// rect(windowWidth/2-windowWidth/12+windowWidth/300+windowWidth/100+windowWidth/14,windowHeight-windowHeight/6,windowWidth/6,10);

	// rect(windowWidth/2,windowHeight,10,100);
	//
	// rect(windowWidth/2+20,windowHeight,10,100);
	//
	// rect(windowWidth/2+40,windowHeight,10,100);




}
