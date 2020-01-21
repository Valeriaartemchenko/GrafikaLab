var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img, 0, 0);
var imgData = ctx.getImageData(0, 0, c.width, c.height);



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

 var bubbleSort = function(inputArr) {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};


var createNewPixel = function(imageD){
  for (var x = 0; x < imageD.width; x++) {
    for (var y = 0; y < imageD.height; y++) {
      var median_values_r = [];
      var median_values_g = [];
      var median_values_b = [];
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

      
      median_values_r.push(p1.R);
      median_values_r.push(p2.R);
      median_values_r.push(p3.R);
      median_values_r.push(p4.R);
      median_values_r.push(p5.R);
      median_values_r.push(p6.R);
      median_values_r.push(p7.R);
      median_values_r.push(p8.R);
      median_values_r.push(p9.R);
      
      median_values_g.push(p1.G);
      median_values_g.push(p2.G);
      median_values_g.push(p3.G);
      median_values_g.push(p4.G);
      median_values_g.push(p5.G);
      median_values_g.push(p6.G);
      median_values_g.push(p7.G);
      median_values_g.push(p8.G);
      median_values_g.push(p9.G);

      median_values_b.push(p1.B);
      median_values_b.push(p2.B);
      median_values_b.push(p3.B);
      median_values_b.push(p4.B);
      median_values_b.push(p5.B);
      median_values_b.push(p6.B);
      median_values_b.push(p7.B);
      median_values_b.push(p8.B);
      median_values_b.push(p9.B);

      bubbleSort(median_values_r);
      bubbleSort(median_values_g);
      bubbleSort(median_values_b);

      

      //умножаем на числа с матрицы, делим на 9 для нормализации
      newR = median_values_r[4]; 
      newG = median_values_g[4];
      newB = median_values_b[4];
    
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



