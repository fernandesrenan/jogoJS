var canvas = document.getElementById("canvas-jogo");
canvas.width = 480;
canvas.height = 320;
var contexto = canvas.getContext("2d");

//##### TESTE #####
//criando um retangulo vermelho
contexto.beginPath();
contexto.rect(20, 40, 50, 50);
contexto.fillStyle = "#FF0000";
contexto.fill();
contexto.closePath();

//criando um circulo verde
contexto.beginPath();
contexto.arc(80, 160, 25, 0, 2*Math.PI, false);
contexto.fillStyle = "green";
contexto.fill();
contexto.closePath();

//criando um retangulo azul vazio
contexto.beginPath();
contexto.rect(80, 5, 100, 50);
contexto.strokeStyle = "blue";
contexto.stroke();
contexto.closePath();