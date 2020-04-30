function draw() {
	var canvas = document.getElementById('Canvas');

	if (canvas.getContext){
		var ctx = canvas.getContext('2d');
		
		var circle = new Path2D();
		circle.moveTo(300, 200);
		circle.arc(100, 200, 10, 0, Math.PI * 2, true);
		ctx.fill(circle);
		
		ctx.fillStyle = "rgb(200,0,0)";
		ctx.fillRect (10, 10, 55, 50);

		ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
		ctx.fillRect (30, 30, 55, 50);
		smile(ctx)
	}
	else {
		// canvas-unsupported code here
	}
}

function smile(ctx) {
	ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
    ctx.stroke();
}