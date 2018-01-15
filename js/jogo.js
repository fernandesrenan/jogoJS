var canvas = document.getElementById("canvas-jogo");
canvas.width = 480;
canvas.height = 320;
var contexto = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var raioBola = 10;

function desenhaBola(){
	contexto.beginPath();
	contexto.arc(x, y, raioBola, 0, Math.PI*2);
	contexto.fillStyle = "blue";
	contexto.fill();
	contexto.closePath();
}

function desenha(){
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	desenhaBola();
	if(x <= raioBola || x >= canvas.width-raioBola){
		dx *= -1;
	}
	if(y <= raioBola || y >= canvas.height-raioBola){
		dy *= -1;
	}
	x += dx;
	y += dy;
}
setInterval(desenha, 10);