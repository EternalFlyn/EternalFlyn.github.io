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

		context.fillStyle = "#000";
		context.fillRect(0, 0, window.innerWidth, window.innerHeight);
		magic(0.5, 0.5, "黑より黑く 闇より暗き漆黑に 我が深紅の混淆を望みたもう 覺醒のとき來たれり 無謬の境界に落ちし理 無行の歪みとなりて 現出せよ！ Explosion!", "#F00", 15, 20);
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

function magic(xp, yp, text, color, size, fontSize) {
	let base = fontSize * size;
	context.strokeStyle = color;
	strokeCircle(xp, yp, base - fontSize * 0.3);
	strokeCircle(xp, yp, base + fontSize);

	context.save();
	context.fillStyle = color;
	context.font = "bold " + fontSize + "px Arial";

	context.translate(getW(xp), getH(yp));
	for(let i = 0; i < text.length; i++) {
		context.fillText(text[i], 0, -base);
		context.rotate(2 * Math.PI / (text.length + 1));
	}
	context.restore();
}