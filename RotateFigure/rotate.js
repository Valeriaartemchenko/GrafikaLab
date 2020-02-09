'use strict';

// общий контекст канвас
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.transform(1, 0, 0, -1, 0, canvas.height);

var rgbBlack = 'rgb(0,0,0)';
ctx.fillStyle = rgbBlack; 

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
      //тут было определение цвета фигуры/точки
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
/*
var P1 = [100,100];
var P2 = [100,200];
var P3 = [150,250];
var P4 = [200,200];
var P5 = [200,100];

drawLine(P1[0],P1[1],P2[0],P2[1]);
  drawLine(P2[0],P2[1],P3[0],P3[1]);
  drawLine(P3[0],P3[1],P4[0],P4[1]);
  drawLine(P4[0],P4[1],P5[0],P5[1]);
  drawLine(P5[0],P5[1],P1[0],P1[1]);
  drawLine(P2[0],P2[1],P4[0],P4[1]);

//drawLine(P1[0],P1[1],P2[0],P2[1]);
*/
/*
var pointsArray = [
{
  x: 100,
  y: 100
},
{
  x: 100,
  y: 200
},
{
  x: 150,
  y: 250
},
{
  x: 200,
  y: 200
},
{
  x: 200,
  y: 100
}];

var drawFigure = function (points){
  for (var i = 0; i < points.length-1; i++) {
    drawLine(points[i].x,points[i].y,points[i+1].x,points[i+1].y)
  };
  drawLine(points[points.length-1].x,points[points.length-1].y,points[0].x,points[0].y);
};

//drawFigure(pointsArray);
 
var getRotationMatrix = function (degrees) {
  var radians = (degrees * Math.PI)/180;// перевожу градусы в радианы

  var rotationMatix = [
    [Math.cos(radians), -1*Math.sin(radians)],
    [Math.sin(radians), Math.cos(radians)]
  ];
  return rotationMatix;
};

var rotationMatix=  getRotationMatrix(45);

var translateFigureTo0 = function(points){
  var x0 = -1* points[0].x;
  var y0 = -1* points[0].y;
  for (var i = 0; i <= points.length-1; i++) {
    points[i].x = points[i].x + x0;
    points[i].y = points[i].y + y0;
  }
  return points;
}

var newPoints = translateFigureTo0(pointsArray);
console.log(newPoints);
ctx.fillStyle = 'rgb(0,255,0)'; 
drawFigure(newPoints);

var rotateFigure = function(points,degrees){
  var rotatedPoints = [];
  for (var i = 0; i <= points.length-1; i++){
   var pointsA = points[i].x * rotationMatix[0][0] + points[i].y * rotationMatix[1][0];
   var pointsB = points[i].x * rotationMatix[0][1] + points[i].y * rotationMatix[1][1]; создавать новый масив обьектов нужно, чтобы правльно провести обчисления
  }
};

console.log(rotateFigure(pointsArray, rotationMatix));
*/
var rotateFigure = function(P1x,P1y,P2x,P2y,P3x,P3y,P4x,P4y,P5x,P5y,d , degrees){
var radians = (degrees * Math.PI)/180;// перевожу градусы в радианы

var rotationMatix = [
  [Math.cos(radians), -1*Math.sin(radians)],
  [Math.sin(radians), Math.cos(radians)]
];

 //рисую домик по точкам  P1x,P1y,P2x,P2y,P3x,P3y,P4x,P4y,P5x,P5y
 drawLine(P1x,P1y,P2x,P2y);
 drawLine(P2x,P2y,P3x,P3y);
 drawLine(P3x,P3y,P4x,P4y);
 drawLine(P4x,P4y,P5x,P5y);
 drawLine(P5x,P5y,P1x,P1y);
 drawLine(P2x,P2y,P4x,P4y);
 //переношу в начало координат
 /*
 P1x = P1x - d;
 P1y = P1y - d;
 P2x = P2x - d;
 P2y = P2y - d;
 P3x = P3x - d;
 P3y = P3y - d;
 P4x = P4x - d;
 P4y = P4y - d;
 P5x = P5x - d;
 P5y = P5y - d;
*/
 drawLine(P1x,P1y,P2x,P2y);
 drawLine(P2x,P2y,P3x,P3y);
 drawLine(P3x,P3y,P4x,P4y);
 drawLine(P4x,P4y,P5x,P5y);
 drawLine(P5x,P5y,P1x,P1y);
 drawLine(P2x,P2y,P4x,P4y);

P1x = P1x*rotationMatix[0][0] + P1y*rotationMatix[1][0]; 
P1y = P1x*rotationMatix[0][1] + P1y*rotationMatix[1][1];
console.log(P1x, P1y);
//P2x = P2x*rotationMatix[0][0] + P2y*rotationMatix[1][0]; 
P2y = P2x*rotationMatix[0][1] + P2y*rotationMatix[1][1];
console.log(P2x, P2y);
};

rotateFigure(100,100,100,200,150,250,200,200,200,100, 100,45);
// рисую домик ручками
/*drawLine(100,100,100,200);
drawLine(100,200,200,200);
drawLine(200,200,200,100);
drawLine(200,100,100,100);

drawLine(100,200,150,250);
drawLine(150,250,200,200);
*/
ctx.fillStyle = 'rgb(255,0,0)'; 
ctx.fillRect(1, 1,5, 5); //нарисовала точку начала координат

// корявый переворот
/*drawLine(141, 0, 212,70);
drawLine(212, 70, 282,70);
drawLine(282, 70, 282,0);
drawLine(282, 0, 212,-70);
drawLine(212, -70, 141,0);
drawLine(212, 70, 282,0);
*/
//перенесение в начало координат
/*ctx.fillStyle = 'rgb(0,255,0)'; 
drawLine(0,0,0,100);
drawLine(0,100,50,150);
drawLine(50,150,100,100);
drawLine(100,100,100,0);
drawLine(100,0,0,0);
drawLine(0,100,100,100);*/
//переворот
/*
drawLine(0,0,70.7,70.7);
drawLine(70.7,70.7,141.4,70.7);
drawLine(141.4,70.7,141.4,0);
drawLine(141.4,0,70.7,-70.7);
drawLine(70.7,70.7,0,0);
drawLine(70.7,70.7,141.4,0);
*/
//перемещение назад
ctx.fillStyle = 'rgb(0,0,255)'; 
drawLine(100,100,170.7,170.7);
drawLine(170.7,170.7,241.4,170.7);
drawLine(241.4,170.7,241.4,100);
drawLine(241.4,100,170.7,29.3);
drawLine(170.7,29.3,100,100);
drawLine(170.7,170.7,241.4,100);



