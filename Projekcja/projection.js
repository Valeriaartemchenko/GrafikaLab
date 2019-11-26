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

function clean(){
    ctx.clearRect(0, 0, 550, 550);
    // Restore the transform
    ctx.restore(); //CLEARS THE SPECIFIC CANVAS COMPLETELY FOR NEW DRAWING
};


var slider = document.querySelector('#slider');
var button = document.querySelector('#drawBtn');
var cleanBtn = document.querySelector('#cleanBtn');


var drawRectangle = function (x1, y1, sideLength){
  drawLine(x1, y1, x1+sideLength,y1);// верхняя сторона квадрата
  drawLine(x1+sideLength,y1, x1 + sideLength, y1- sideLength); // правая сторона
  drawLine(x1 + sideLength, y1- sideLength, x1, y1- sideLength); //нижняя сторона
  drawLine(x1, y1- sideLength, x1, y1);//левая сторона
};

var movePointX = function(rangeElement){
  var x = 100; //чтобы был слева отступ 100 пикселей отнимаю от х1 100 пикселей и выходит координата 100
  var projectionLength = 400; // отступ слева + длина стороны квадрата + отсуп справа
  if(slider.value >= 0 && slider.value <= 90){
    x = x + slider.value * (projectionLength/90);
  } else if (slider.value > 90 && slider.value <= 180) {
    x = x + projectionLength;
  }
  else if (slider.value > 180 && slider.value <= 240) {
    x = (x + projectionLength) - slider.value%90 * (projectionLength/90);
  } else {
    x = x;
  } 
  return x;
};

var movePointY = function(rangeElement){
  var y = 400; // чтобы был отступ 100 прибавляю к у1 координате 100 и выходит 300
  var projectionLength = 400;
  if(slider.value >= 0 && slider.value <= 90){
    y = y;
  } else if (slider.value > 90 && slider.value <= 180) {
    y = y - slider.value%90 * (projectionLength/90);
  }
  else if (slider.value > 180 && slider.value <= 240) {
    y = y - projectionLength;
  } else {
    y = (y - projectionLength) + slider.value%90 * (projectionLength/90);
  } 
  return y;
};
  
var x;
var y;

var getProjectionLength

var drawProjectionDraft = function (x1, y1, sideLength){
  //drawRectangle(x1, y1, sideLength); //рисуем исходный квадрат
  //потом рисуем линии которые соеденяют точки квадрата с точкой проекции 
  
  drawLine(x,y,x1,y1); // x1
  drawLine(x,y,x1+sideLength,y1); // x2
  drawLine(x,y, x1 + sideLength, y1- sideLength); //x3
  drawLine(x,y,x1, y1- sideLength); //x4
  //рисую квадрат-проекцию по midpoints векторов
  drawLine((x+x1)/2,(y+y1)/2,(x+(x1+sideLength))/2,(y+y1)/2);
  drawLine((x+(x1+sideLength))/2,(y+y1)/2,(x+(x1+sideLength))/2,(y+(y1- sideLength))/2);
  drawLine((x+(x1+sideLength))/2,(y+(y1- sideLength))/2,(x+x1)/2,(y+(y1- sideLength))/2);
  drawLine((x+x1)/2,(y+(y1- sideLength))/2,(x+x1)/2,(y+y1)/2);
  /*
  (x+x1)/2,(y+y1)/2 // first midpoint
  (x+(x1+sideLength))/2,(y+y1)/2 //second midpoint
  (x+(x1+sideLength))/2,(y+(y1- sideLength))/2 //third
  (x+x1)/2,(y+(y1- sideLength))/2 //fourth
  */
};


slider.addEventListener('click', function (){
  x = movePointX(slider);
  y = movePointY(slider);
  console.log(slider.value);
});

drawBtn.addEventListener('click', function(){
  //ctx.fillRect(x,y , 3, 3);
  drawRectangle(250,250,100) //рисую исходный квадрат
  drawProjectionDraft(250,250,100); //потом рисуем линии которые соеденяют точки квадрата с точкой проекции 
});

cleanBtn.addEventListener('click', function(){
  clean();
});


