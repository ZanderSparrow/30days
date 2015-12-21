$(function() {
  for(var i = 0; i < 5; i++) {
    $('.parallax').prepend('<div class="space"></div>');
  }

  function getRandomColor() {
    var c1 = Math.floor(Math.random()*255 + 1);
    var c2 = Math.floor(Math.random()*255 + 1);
    var c3 = Math.floor(Math.random()*255 + 1);
    return "rgb(" + c1 + "," + c2 + "," + c3 + ")";
  }

  $('#circle').css("background-color", getRandomColor());

  var s = skrollr.init();
});