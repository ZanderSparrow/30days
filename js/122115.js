$(function() {
  for(var i = 0; i < 5; i++) {
    $('.parallax').prepend('<div class="space"></div>');
  }
  
  var s = skrollr.init();
});