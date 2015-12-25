var move = function(elem, x, y) {
  elem.css("margin", x + "px 0 0 " + y + "px");
};

$(function() {
  var ball = $('.ball');
  ball.css("background-color", "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")"); 
  var diam = 50;
  var room_h = 500, room_w = 600;
  var x = 0, y = 0;
  var x_velocity = 1, y_velocity = 1;

  setInterval(function(){
    move(ball, x, y);
    if(x > room_h - diam || x < 0) {
      x_velocity *= -1;
    }
    if(y > room_w - diam || y < 0) {
      y_velocity *= -1;
    }
    x += x_velocity;
    y += y_velocity;
  }, 10);

});