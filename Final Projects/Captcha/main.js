function sleekZebraEffect() {
  // inspired by - http://www.webdesignerwall.com/demo/css-gradient-text/
  
  var c = document.getElementById("display-captcha");
  var ctx = c.getContext("2d");
  var text = randomString();
  var font = "30px Helvetica, sans-serif";

  // save state
  ctx.save();
  ctx.font = font;

  // getMetrics calculates:
  // width + height of text-block
  // top + middle + bottom baseline
  var text_width = ctx.measureText(text);
  console.log(text_width); 
  //var metrics = getMetrics(text, font);
  var offsetRefectionY = -20;
  var offsetY = 70;
  var offsetX = 60;
  
  var gradient = ctx.createLinearGradient(0, offsetY, 0, 200 + offsetY);
  gradient.addColorStop(0.1, '#000');
  gradient.addColorStop(0.5, '#fff');
  gradient.addColorStop(0.65, '#fff');
  gradient.addColorStop(0.9, '#000');
  ctx.fillStyle = gradient
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillText(text, offsetX, offsetY + 150);
  
  }
  
  var randomString = function() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var string_length = 5;
  var randomstring = '';
  for (var i = 0; i < string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
}

sleekZebraEffect();

document.querySelector('button').onclick = function() {
  sleekZebraEffect();
}