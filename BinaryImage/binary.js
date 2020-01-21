var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img, 0, 0);
var imgData = ctx.getImageData(0, 0, c.width, c.height);

var colorDetectionNumber = 100;
// все пиксели матрицы которые изменяем в изображении
var p1, p2, p3, 
    p4, p5, p6, 
    p7, p8, p9;
//вспомагательные переменные
var newPixel, newColor;
//берем данные пикселя
imgData.getPixel=function(x,y){
  var i=(x+y*this.width)*4;
  return  {R:this.data[i],
          G:this.data[i+1],
          B:this.data[i+2],
          A:this.data[i+3]
         }
 };


var createNewPixel = function(imageD){
  for (var x = 0; x < imageD.width; x++) {
    for (var y = 0; y < imageD.height; y++) {
      // получаем все пиксели матрицы с которой будем работать
      pixel = imgData.getPixel(x,y);
      
      if(pixel.R >= colorDetectionNumber && pixel.G >= colorDetectionNumber && pixel.B >= colorDetectionNumber){
        newColor = 'rgb(0,0,0)';
      } else {
        newColor = 'rgb(255,255,255)';
      }
       

      //вставляем новый пиксель в канвас
      ctx.fillStyle = newColor;
      ctx.fillRect(x, y, 1, 1);
      }
  };
};



createNewPixel(imgData);



