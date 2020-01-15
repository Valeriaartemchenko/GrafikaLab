var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img, 0, 0);
var imgData = ctx.getImageData(0, 0, c.width, c.height);

var brighttenImage = function(imageD){
  for (var i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = imgData.data[i] + 100;
    imgData.data[i+1] = imgData.data[i+1] + 100;
    imgData.data[i+2] = imgData.data[i+2] + 100;
    imgData.data[i+3] = 255;   
  }
  return imageD;
};

var darkenImage = function(imageD){
  for (var i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = imgData.data[i] - 70;
    imgData.data[i+1] = imgData.data[i+1] - 70;
    imgData.data[i+2] = imgData.data[i+2] - 70;
    imgData.data[i+3] = 255;   
  }
  return imageD;
};

var correctImageColor = function(imageD){
  var pixelsRed = [];
  var pixelsGreen = [];
  var pixelsBlue = [];

  for (var i = 0; i < imgData.data.length; i += 4) {
    pixelsRed.push(imgData.data[i]);
    pixelsGreen.push(imgData.data[i+1]);
    pixelsBlue.push(imgData.data[i+2]);
  }

  var minRed = Math.min.apply(Array, pixelsRed);
  var maxRed = Math.max.apply(Array, pixelsRed);

  var minGreen = Math.min.apply(Array, pixelsGreen);
  var maxGreen = Math.max.apply(Array, pixelsGreen); 

  var minBlue = Math.min.apply(Array, pixelsBlue);
  var maxBlue = Math.max.apply(Array, pixelsBlue); 

  console.log( minRed, maxRed, minGreen,maxGreen,minBlue, maxBlue);
  
  for (var i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = (imgData.data[i] - minRed) * (255 / (maxRed - minRed));
    imgData.data[i+1] = (imgData.data[i+1] - minGreen) * (255 / (maxGreen - minGreen));
    imgData.data[i+2] = (imgData.data[i+2] - minBlue) * (255 / (maxBlue - minBlue));
    imgData.data[i+3] = 255;  
  }

  return imageD;
};

//correctImageColor(imgData);
brighttenImage(imgData);
//darkenImage(imgData);





ctx.putImageData(imgData, 0, 0);



