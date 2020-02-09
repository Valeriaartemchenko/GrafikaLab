'use strict';

// общий контекст канвас
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var rgbBlack = 'rgb(0,0,0)';

var drawLine = function (initX, initY, endX, endY) {

  // вычисляем длину вектора и записываем в переменную - это будет равно количеству повторений цикла
  var lineLength = Math.sqrt(
    (Math.pow(endX-initX,2)) + (Math.pow(endY-initY,2)
  ));
  // округляем чтобы это было целое число
  lineLength = Math.floor(lineLength);
  // вводим переменные для хранения текущих координат
  var currentX = initX;
  var currentY = initY;
  // длина проекции на ось х и y (по модулю для того чтобы не было отрицательных значений)
  var x = Math.abs(endX - initX);
  var y = Math.abs(endY - initY);
  // шаг с которым будет изменятся текущая координата при отрисовке циклом
  var stepForX = x/lineLength;
  var stepForY = y/lineLength;
  // рисуем
  for(var i = 0; i <= lineLength; i++){  
    for(var j = 0; j <= 1; j++){
      ctx.fillStyle = rgbBlack; 
      ctx.fillRect(currentX, currentY, 1, 1);
    };
    if (initX <= endX){ // если true то рисуем "слева - направо" , то есть добавляем 1 шаг
      currentX +=stepForX;
    } else {
      currentX -=stepForX; // если false то рисуем справа- налево, поэтому отнимаем один шаг
    };

    if (initY <= endY) { // аналогично, если  true то сверху -вниз
      currentY += stepForY; 
    } else { // если false то знизу-вверх
      currentY -= stepForY;
    };
  };
};
// запускаем функцию, можно параметры взять из поля ввода формы

// работа с формой
var koordynataX1 = document.querySelector('#x1');
var koordynataY1 = document.querySelector('#y1');
var koordynataX2 = document.querySelector('#x2');
var koordynataY2 = document.querySelector('#y2');
var koordynataX3 = document.querySelector('#x3');
var koordynataY3 = document.querySelector('#y3');
var button = document.querySelector('.apply');
var form = document.querySelector('.input_form');
var drawTriangleButton = document.querySelector('.drawTriangle');
var drawStarButton = document.querySelector('.drawStar');


button.addEventListener('click', function(){
  drawLine(Number(koordynataX1.value),Number(koordynataY1.value),Number(koordynataX2.value),Number(koordynataY2.value));
});

drawTriangleButton.addEventListener('click', function(){
  drawLine(Number(koordynataX1.value),Number(koordynataY1.value),Number(koordynataX2.value),Number(koordynataY2.value));
  drawLine(Number(koordynataX2.value),Number(koordynataY2.value),Number(koordynataX3.value),Number(koordynataY3.value));
  drawLine(Number(koordynataX3.value),Number(koordynataY3.value),Number(koordynataX1.value),Number(koordynataY1.value));
});

drawStarButton.addEventListener('click', function(){
  drawLine(110,50,150,170);
  drawLine(150,170,50,100);
  drawLine(50,100,170,100);
  drawLine(170,100,70,170);
  drawLine(70,170,110,50);
});

//--------------------------заполнение----------------------------
var imgData=ctx.getImageData(0,0,c.width,c.height);
var rgba = 'rgba(' + data[0] + ', ' + data[1] +', ' + data[2] + ', ' + (data[3] / 255) + ')';






