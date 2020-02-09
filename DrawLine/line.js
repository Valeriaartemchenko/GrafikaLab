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
drawLine(20,100,50,300);
/*
// работа с формой
var initialX = document.querySelector('#coordinate-x__initial').value;
var finalX = document.querySelector('#coordinate-x__final').value;
var initialY = document.querySelector('#coordinate-y__initial').value;
var finalY = document.querySelector('#coordinate-y__final').value;
var button = document.querySelector('#apply-btn');



/*
var draw = function () {
  drawLine(initialX, initialY, finalX, finalY);
};

button.addEventListener('click', draw);

*/
