$(function() {
  var clock;

  var setCurrentTime = function() {
    $('.min').val('');
    $('.sec').val('');
    $('body').removeClass('count-done');
    clock = $('.clock').FlipClock();
    var d = new Date();
    var time = d.getSeconds();
    time += (d.getMinutes() * 60);
    time += (d.getHours() * 60 * 60);

    clock.setTime(time);
  };

  var stopWatch = function(t) {
    $('.error').hide();
    clock = $('.clock').FlipClock(t, {
      clockFace: 'MinuteCounter',
      countdown: true
    });
    setTimeout(function() {
      $('body').addClass('count-done');
    }, t * 1000 + 1000);
  };

  setCurrentTime();

  $('.stop-watch').on('click', function() {
    $('body').removeClass('count-done');
    $('body').addClass('black-out');
    $('.timer-set').show();
  });

  $('.current-time').on('click', function() {
    $('.timer-set').hide();
    $('body').removeClass('black-out');
    setCurrentTime();
  });


  $('.selections').on('click', '.cancel-timer', function() {
    $('body').removeClass('black-out');
    $('.timer-set').hide();
    $('.min').val('');
    $('.sec').val('');
  });

  $('.selections').on('click', '.start-timer', function() {
    var minutes = +$('.min').val();
    var seconds = +$('.sec').val();
    var time = 0;
    time += typeof seconds === "number" ? seconds : 0;
    time += typeof minutes === "number" ? minutes * 60 : 0;
    if(time > 0) {
      $('body').removeClass('black-out');
      $('.timer-set').hide();
      stopWatch(time);
    } else {
      $('.error').show();
    }
    $('.min').val('');
    $('.sec').val('');
    
  });
});