

 var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img, 0, 0);
var imgData = ctx.getImageData(0, 0, c.width, c.height);

//маска
var edge_detection_mask = [-1, -1, -1,
                           -1, 9, -1,
                           -1, -1, -1];
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
      p1 = imgData.getPixel(x,y);
      p2 = imgData.getPixel(x,y+1);
      p3 = imgData.getPixel(x,y+2);

      p4 = imgData.getPixel(x+1,y);
      p5 = imgData.getPixel(x+1,y+1);
      p6 = imgData.getPixel(x+1,y+2);

      p7 = imgData.getPixel(x+2,y);
      p8 = imgData.getPixel(x+2,y+1);
      p9 = imgData.getPixel(x+2,y+2);

      //умножаем на числа с матрицы, делим на 9 для нормализации
      newR = Math.floor(- p1.R - p2.R - p3.R - p4.R + p5.R*9 - p6.R - p7.R - p8.R - p9.R);  
      newG = Math.floor(- p1.G - p2.G - p3.G - p4.G + p5.G*9 - p6.G - p7.G - p8.G - p9.G);
      newB = Math.floor(- p1.B - p2.B - p3.B - p4.B + p5.B*9 - p6.B - p7.B - p8.B - p9.B);
    
      newPixel = p5;
      newPixel.R = newR;
      newPixel.G = newG; 
      newPixel.B = newB;  
      //console.log(newPixel);
      newColor = 'rgb('+ newPixel.R + ', ' + newPixel.G + ', ' + newPixel.B +')'
      //console.log('new color ' + newColor);

      //вставляем новый пиксель в канвас
      ctx.fillStyle = newColor;
      ctx.fillRect(x, y, 1, 1);
    };
  };
};

createNewPixel(imgData);



