var bird2;
var pipes = [];
var score = 0;
function setup() {
	createCanvas(400, 600);
	bird2 = new bird();
	pipes.push(new pipe());


}
function draw (){
	background(0);
		
	bird2.show();
	bird2.update();

	for (var i = pipes.length - 1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();
		if(pipes[i].hits(bird2)){
			console.log("hit");
			// Decrease the score 	
		}

	/*	if(pipes[i].passed(bird2)){
			console.log("passed");
			// Increase score
		}*/
		if(pipes[i].offscreen()){
			pipes.splice(i,1);
		}
	}
	if(frameCount % 100 == 0){
		pipes.push(new pipe());
	}
}

function keyPressed (){
	if(key == ' '){
		bird2.up();
	}


}