'use strict';

// общий контекст канвас
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var rgbBlack = 'rgb(0,0,0)';
var padding = 150; //чтобы круг не заезжал за экран прибавляем к коодинатам 
// функция для рисования пикселя
var drawPoint = function(x,y){
	ctx.fillStyle = rgbBlack; 
    ctx.fillRect(x+padding, y+padding, 1, 1);
};
// отрисовка круга
var drawCircle = function(radius){
	var x = 0; //изначальная координата х
	var y = radius; // у равен радиусу
	var d = 1 - radius; //непонятно замем, но то-то эта переменная тут делает
	
	while(y>x) {
      if (d < 0){
      	d += x * 2 + 3;
      	x++;
      } else {
      	d += (x-y)*2 +5;
      	x++;
      	y--;
      }
    // рисуем отдельные сегменты по очереди складывая их в круг
    drawPoint(x,y);
    drawPoint(y,x);
    drawPoint(y,-x);
    drawPoint(x,-y);
    drawPoint(-x,-y);
    drawPoint(-y,-x);
    drawPoint(-y,x);
    drawPoint(-x,y);
    };
};

drawCircle(100);


