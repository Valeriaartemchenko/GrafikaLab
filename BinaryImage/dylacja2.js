var c = document.getElementById("myCanvas");
var c2 = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
var ctx2 = c2.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img, 0, 0);
var imgData = ctx.getImageData(0, 0, c.width, c.height);

console.log(imgData);

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

//делаю бинаризацию сначала
createNewPixel(imgData);
console.log(imgData);
//записываю измененные пиксели в новый обьект
var imgData2 = ctx.getImageData(0, 0, c.width, c.height);
console.log(imgData2);
ctx2.putImageData(imgData2, 0, 0);
//создаю метод на то чтобы взять пиксель из обьекта
imgData2.getPixel=function(x,y){
  var i=(x+y*this.width)*4;
  return  {R:this.data[i],
          G:this.data[i+1],
          B:this.data[i+2],
          A:this.data[i+3]
         }
 };
//фукнция которая делает деляцию

var createNewPixel2 = function(imageD){
  for (var x = 0; x < imageD.width; x++) {
    for (var y = 0; y < imageD.height; y++) {
      // получаем все пиксели матрицы с которой будем работать
      p1 = imgData2.getPixel(x,y);
      p2 = imgData2.getPixel(x,y+1);
      p3 = imgData2.getPixel(x,y+2);

      p4 = imgData2.getPixel(x+1,y);
      p5 = imgData2.getPixel(x+1,y+1);
      p6 = imgData2.getPixel(x+1,y+2);

      p7 = imgData2.getPixel(x+2,y);
      p8 = imgData2.getPixel(x+2,y+1);
      p9 = imgData2.getPixel(x+2,y+2);
      
     
     

      if(p1.R == 0 || p2.R == 0 || p3.R == 0 || p4.R == 0 || p5.R == 0 || p6.R == 0 || p7.R == 0 || p8.R == 0 || p9.R == 0){
        newColor = 'rgb(0,0,0)';
        //вставляем новый пиксель в канвас
        ctx.fillStyle = newColor;
        ctx.fillRect(x+1, y+1, 1, 1);
      } else {
        newColor = 'rgb(255,255,255)';
        ctx.fillStyle = newColor;
        ctx.fillRect(x, y, 1, 1);
      }      
    };
  };
};

createNewPixel2(imgData2);



