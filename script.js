var w, h;
var context;

function load() {
	window.onresize = function() {draw()}
	draw();
}

function draw() {
	w = window.innerWidth;
	h = window.innerHeight;
	var head = document.getElementById('header');
	if(head.getContext) {
		context = head.getContext("2d");

		head.width = w;
		head.height = h;

		context.fillStyle = "#00FFFF";
		context.fillRect(0, 0, window.innerWidth, window.innerHeight);

		strokeCircle(0.5, 0.5, 100);
		context.fillStyle = circleRainbowColor(0.5, 0.5, 0.5, 0.5, 50);
		fillCircle(0.5, 0.5, 50);
	}
}

function getW(i) {
	return w * i;
}

function getH(i) {
	return h * i;
}

function strokeCircle(xp, yp, radius) {
	context.beginPath();
	context.arc(getW(xp), getH(yp), radius, 0, 2 * Math.PI);
	context.stroke();
}

function fillCircle(xp, yp, radius) {
	let x = window.innerWidth * xp, y = window.innerHeight * yp;
	context.beginPath();
	context.arc(getW(xp), getH(yp), radius, 0, 2 * Math.PI);
	context.fill();
}

function circleRainbowColor(x1p, y1p, x2p, y2p, r) {
	let x1 = getW(x1p), x2 = getW(x2p), y1 = getH(y1p), y2 = getH(y2p);
	let color = context.createRadialGradient(x1, y1, 0, x2, y2, r);
	color.addColorStop(0, "red");
	color.addColorStop(0.167, "orange");
	color.addColorStop(0.333, "yellow");
	color.addColorStop(0.5, "green");
	color.addColorStop(0.667, "blue");
	color.addColorStop(0.833, "indigo");
	color.addColorStop(1, "purple");
	return(color)
}