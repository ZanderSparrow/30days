var checkTimeMs = function(string) {
  return string[string.length - 1] === '0' ? true : false;
}

var convertTimeString = function(time_ms) {
  var ms = time_ms % 10;
  var seconds = Math.floor(time_ms / 10) % 10;
  var tenSeconds = Math.floor(time_ms / 100) % 6;
  var minutes = Math.floor(time_ms / 600);
  return minutes + ":" + tenSeconds + seconds + "." + ms;
}

$(function() {
  var ticking = false;
  var time = 0;
  var time_formatted = "0:00.0";
  var score = 0;
  var missed = 0;

  setInterval(function() {
    if(ticking) {
      time++;
      time_formatted = convertTimeString(time);
      $('.time p').text(time_formatted);
    }
  }, 100);


  $('.start').on('click', function() {
    ticking = true;
  });

  $('.stop').on('click', function() {
    ticking = false;
    setTimeout(function() {
      if(checkTimeMs(time_formatted)) {
        score++;
      } else {
        missed++;
      }
      var hitWord = score === 1 ? " hit" : " hits";
      var missWord = missed === 1 ? " miss" : " misses";
      $('.score p').text("Score: " + score + hitWord + ", " + missed + missWord + ".");
    }, 100);
    
  });

  $('.reset').on('click', function() {
    ticking = false;
    $('.score p').text('');
    score = 0;
    missed = 0;
    time = 0;
    time_formatted = "0:00.0";
    $('.time p').text(time_formatted);
  });

});