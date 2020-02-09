'use strict';

// общий контекст канвас
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.transform(1, 0, 0, -1, 0, canvas.height);

var rgbBlack = 'rgb(0,0,0)';
var coordinateX = 10;
var coordinateY = 10;

//--------------------------------------------------
var drawPixel = function(x,y){
  ctx.fillStyle = rgbBlack; 
  ctx.fillRect(x, y, 1, 1);
};


//---------------по формуле лагранджа


var getY = function(x) {
  var y = (Math.pow(x,2)*5 - 25*x)/-6;
  return y;
}
//var yArray = [];

for (var i = 0; i<=100; i = i+0.01){
  var y = getY(i);
  drawPixel(i*30,y*30);//умножила на 30 чтобы масштабироввать
};

//---------------по формуле Хермита

var getX = function(t) {
  var x = Math.pow(t,3)*(-8) + 12*Math.pow(t,2) + t;
  return x;
};

var getY2 = function(t) {
  var y = -Math.pow(t,3) + t;
  return y;
}

for (var i = 0; i<=50; i = i+0.01){
var x = getX(i);
var y = getY2(i); 
drawPixel(x*50,y*50);   
};

      
        var x1 = 100;
        var y1 = 50;
        
        function drawPoint(x, y){
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(x * 1 + x1 * 1, y * 1 + y1 * 1, 1, 1);
        };
       
            for(var i = -50; i < 50; i+=0.01){
                var x = 0;
                var y = 0;
                var t = i;

                y = -((-8 * t * t * t) + (12 * t * t) + t);
                x = (-1 * t * t * t) + t;
                drawPoint(x * i, y * i);
            }

//Кривая Безье

// here we get 2 coordinates of circle center  
          var x1 = 300;
          var y1 = 100;
          //var diameter = 100;
  
          
          function drawPoint(x, y){
              ctx.fillStyle = 'rgb(0, 0, 0)';
              ctx.fillRect(x * 1 + x1 * 1, y * 1 + y1, 1, 1);
          };
         
              for(var i = -10; i < 10; i+=0.01){
                  var x = 0;
                  var y = 0;
                  var t = i;
  
                  x = 3 * t * ((1 - t) * (1 - t)) + ((12 * t * t) * (1 - t)) + (5 * t * t * t);
                  y =  (9 * t *((1 - t) * (1 - t)) + (9 * t * t * (1 - t)));
                  drawPoint(x * 10, y * 10);
              }