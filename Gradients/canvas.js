'use strict';

// общий контекст канвас
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
/* для RGB в ЧЕРНО БЕЛОМ цвете просто меняю значение прозрачности на всех*/
//  задаем изначальный цвет-основа


var drawGradientRGBBlackWhite = function (lineLengthInPixels, gradientScale, pixelX, pixelYInitial, pixelOpacity) {
  var rgbColor = 'rgb(0,0,0,'
  var pixelY = pixelYInitial;
  for (var j = 0; j <= gradientScale; j++) {
    for (var i = 0; i <= lineLengthInPixels; i++) {
      ctx.fillStyle = rgbColor + pixelOpacity + ')';
      ctx.fillRect(pixelX, pixelY, 1, 1);
      pixelY++;  
    };
  pixelOpacity = pixelOpacity - (1/gradientScale); //уменьшаем прозрачность пикселя
  pixelX++;// увеличиваем координату х чтобы рисовать в право
  pixelY = pixelYInitial;//возвращаем в начало координату y
  };
};


var drawGradientRGB = function (lineLengthInPixels, gradientScale, pixelX, pixelYInitial) {
  var pixelY = pixelYInitial;
  var greenValue = 0;
  var blueValue = 0;
  var redValue = 0;
  // рисует градиент от зеленого к синему
  for (var j = 0; j <= gradientScale; j++) {
    for (var i = 0; i <= lineLengthInPixels; i++) {
      ctx.fillStyle = 'rgb(' + redValue + ',' + greenValue + ', ' + blueValue + ')';
      ctx.fillRect(pixelX, pixelY, 1, 1);
      pixelY++;  
    };
  greenValue += 0.51;
  blueValue += 0.51;
  redValue += 0.51; 
  pixelX++;// увеличиваем координату х чтобы рисовать в право
  pixelY = pixelYInitial;//возвращаем в начало координату y
  }; 
};



/*-----HLS В ЧЕРНО БЕЛОМ ------- !не. hvs потому что этот формат не поддерживается в js и канвас  */
var hlsColor = 'hsl(0,0%,';//for black

var drawGradientHlsBlackWhite = function (lineLengthInPixels, gradientScale, pixelX, pixelYInitial, pixelValue) {
  var pixelY = pixelYInitial;
  for (var j = 0; j <= gradientScale; j++) {
    for (var i = 0; i <= lineLengthInPixels; i++) {
      ctx.fillStyle = hlsColor + pixelValue + '%)';
      ctx.fillRect(pixelX, pixelY, 1, 1);
      pixelY++;  
    };
  pixelValue = pixelValue + (100/gradientScale); 
  pixelX++;// увеличиваем координату х чтобы рисовать в право
  pixelY = pixelYInitial;//возвращаем в начало координату y
  };
};

/*-----RGB цветное 2 перехода-------   */
var drawGradientRGBGreenBlueRed = function (lineLengthInPixels, gradientScale, pixelX, pixelYInitial) {
  var pixelY = pixelYInitial;
  var greenValue = 255;
  var blueValue = 0;
  var redValue = 0;
  // рисует градиент от зеленого к синему
  for (var j = 0; j <= gradientScale/2; j++) {
    for (var i = 0; i <= lineLengthInPixels; i++) {
      ctx.fillStyle = 'rgb(' + redValue + ',' + greenValue + ', ' + blueValue + ')';
      ctx.fillRect(pixelX, pixelY, 1, 1);
      pixelY++;  
    };
  greenValue--;
  blueValue++; 
  pixelX++;// увеличиваем координату х чтобы рисовать в право
  pixelY = pixelYInitial;//возвращаем в начало координату y
  }; 
  
  //рисует гридиент от синего у красному
  for (var j = 0; j <= gradientScale/2; j++) {
    for (var i = 0; i <= lineLengthInPixels; i++) {
      ctx.fillStyle = 'rgb(' + redValue + ',' + greenValue + ', ' + blueValue + ')';
      ctx.fillRect(pixelX, pixelY, 1, 1);
      pixelY++;  
    };
  blueValue--;
  redValue++; 
  pixelX++;// увеличиваем координату х чтобы рисовать в право
  pixelY = pixelYInitial;//возвращаем в начало координату y
  };
};


/*-----RGB цветное 4 перехода-------   */

var drawGradientRGBGreenBlueRed2 = function (lineLengthInPixels, gradientScale, pixelX, pixelYInitial) {
  var pixelY = pixelYInitial;
  var greenValue = 255;
  var blueValue = 0;
  var redValue = 0;
  // рисует градиент от зеленого к бирюзе
  for (var j = 0; j <= gradientScale/4; j++) {
    for (var i = 0; i <= lineLengthInPixels; i++) {
      ctx.fillStyle = 'rgb(' + redValue + ',' + greenValue + ', ' + blueValue + ')';
      ctx.fillRect(pixelX, pixelY, 1, 1);
      pixelY++;  
    };
  blueValue += 2; //делаем шаг 2 пикселя чтобы вместиться в длину 500
  pixelX++;// увеличиваем координату х чтобы рисовать в право
  pixelY = pixelYInitial;//возвращаем в начало координату y
  }; 
  
  //рисует гридиент от бирюзы у синему
  for (var j = 0; j <= gradientScale/4; j++) {
    for (var i = 0; i <= lineLengthInPixels; i++) {
      ctx.fillStyle = 'rgb(' + redValue + ',' + greenValue + ', ' + blueValue + ')';
      ctx.fillRect(pixelX, pixelY, 1, 1);
      pixelY++;  
    };
  greenValue -= 2; //делаем шаг 2 пикселя чтобы вместиться в длину 500
  pixelX++;// увеличиваем координату х чтобы рисовать в право
  pixelY = pixelYInitial;//возвращаем в начало координату y
  };

  //рисует гридиент от синего к розовому
  for (var j = 0; j <= gradientScale/4; j++) {
    for (var i = 0; i <= lineLengthInPixels; i++) {
      ctx.fillStyle = 'rgb(' + redValue + ',' + greenValue + ', ' + blueValue + ')';
      ctx.fillRect(pixelX, pixelY, 1, 1);
      pixelY++;  
    };
  redValue += 2; //делаем шаг 2 пикселя чтобы вместиться в длину 500
  pixelX++;// увеличиваем координату х чтобы рисовать в право
  pixelY = pixelYInitial;//возвращаем в начало координату y
  };

  //рисует гридиент от розового к красному
  for (var j = 0; j <= gradientScale/4; j++) {
    for (var i = 0; i <= lineLengthInPixels; i++) {
      ctx.fillStyle = 'rgb(' + redValue + ',' + greenValue + ', ' + blueValue + ')';
      ctx.fillRect(pixelX, pixelY, 1, 1);
      pixelY++;  
    };
  blueValue -= 2; //делаем шаг 2 пикселя чтобы вместиться в длину 500
  pixelX++;// увеличиваем координату х чтобы рисовать в право
  pixelY = pixelYInitial;//возвращаем в начало координату y
  };
};

/*-----HLS цветное 4 перехода-------   */

var drawGradientHSLGreenBlueRed = function (lineLengthInPixels, gradientScale, pixelX, pixelYInitial) {
  var pixelY = pixelYInitial;
  var hueValue = 120; //начинаем от зеленого, потому значение 120
  
  for (var j = 0; j <= gradientScale; j++) {
    for (var i = 0; i <= lineLengthInPixels; i++) {
      ctx.fillStyle = 'hsl(' + hueValue + ', 100%, 50%)';
      ctx.fillRect(pixelX, pixelY, 1, 1);
      pixelY++;  
    };
  hueValue += 0.5; //шаг изменения цвета, всего надо пройти спектр 240 единиц, 240/500(длина градиента) выходит 0.48 ~0.5 
  pixelX++;// увеличиваем координату х чтобы рисовать в право
  pixelY = pixelYInitial;//возвращаем в начало координату y
  }; 
}

/*-----HLS цветное много переходов-------   */

var drawGradientHSLGreenBlueRed2 = function (lineLengthInPixels, gradientScale, pixelX, pixelYInitial) {
  var pixelY = pixelYInitial;
  var hueValue = 0;
  var lightness = 50;
  
  // рисует градиент от зеленого к бирюзе
  for (var j = 0; j <= gradientScale/2; j++) {
    for (var i = 0; i <= lineLengthInPixels; i++) {
      ctx.fillStyle = 'hsl(' + hueValue + ', 100%, 50%)';
      ctx.fillRect(pixelX, pixelY, 1, 1);
      pixelY++;  
    };
  hueValue += 0.72; //шаг изменения цвета, потому что 180 / 250 равно 0.72
  pixelX++;// увеличиваем координату х чтобы рисовать вправо
  pixelY = pixelYInitial;//возвращаем в начало координату y
  };

  // рисует градиент от зеленого к бирюзе
  for (var j = 0; j <= gradientScale/2; j++) {
    for (var i = 0; i <= lineLengthInPixels; i++) {
      ctx.fillStyle = 'hsl(' + hueValue + ', 100%,' + lightness + '%)';
      ctx.fillRect(pixelX, pixelY, 1, 1);
      pixelY++;  
    };
  hueValue += 0.72;//шаг изменения цвета, потому что 180 / 250 равно 0.72
  lightness += 0.2; //делаем шаг 2 пикселя чтобы вместиться в длину 500
  pixelX++;// увеличиваем координату х чтобы рисовать вправо
  pixelY = pixelYInitial;//возвращаем в начало координату y
  };  
}


// вызываем функции
//drawGradientRGBBlackWhite(100,500,40,20,1); // первый вариант чб градиента
drawGradientRGB(100,500,40,20); //  второй вариант чб градиента
drawGradientHlsBlackWhite(100,500,40,140,0);
drawGradientRGBGreenBlueRed(100, 500, 40, 260);
drawGradientRGBGreenBlueRed2(100, 500, 40, 380);
drawGradientHSLGreenBlueRed(100, 500, 40, 500);
drawGradientHSLGreenBlueRed2(100, 500, 40, 620);

//полезная ссылка http://colorizer.org/
