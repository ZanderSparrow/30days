$(function() {
  var colors = {
    s0: { half: 'rgba(0, 100, 255, 0.4)', full: 'rgba(0, 100, 255, 1)' },
    s1: { half: 'rgba(255, 255, 0, 0.4)', full: 'rgba(255, 255, 0, 1)' },
    s2: { half: 'rgba(255, 0, 0, 0.4)', full: 'rgba(255, 0, 0, 1)' },
    s3: { half: 'rgba(0, 255, 0, 0.4)', full: 'rgba(0, 255, 0, 1)' }
  };

  for(var i = 0; i < 4; i++) {
    var sq = 's' + i;
    var color = colors[sq].half
    $('.game').append('<div class="square ' + sq + '"></div>');
    $('.s' + i).css("background-color", color);
  }

  var getNextSquare = function() {
    var num = Math.floor(Math.random() * 4);
    return 's' + num;
  };

  var flashSquare = function(sq, i, p, delay) {
    var div = $('.' + sq);
    setTimeout(function() {
      div.css("background-color", colors[sq].full);
      setTimeout(function(){
        div.css("background-color", colors[sq].half);
      }, p);
    }, (p + delay) * i); 
  };

  var arraysEqual = function(arr1, arr2) {
    for(var i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }


  var play = function() {
    $('.game-over').hide();
    var pattern = [];
    var userClicked = [];
    var score = 0;
    var gameOver = false;
    var pause = 2000;
    var go = true;
    $('.points').text(score).show();

    var playRound = function() {
      //Add a new square to the pattern
      pattern.push(getNextSquare());
      //Flash the square currently in the pattern
      for(var i = 0; i < pattern.length; i++) {
        flashSquare(pattern[i], i, pause, 350);
      }
    };

    playRound();

    $('.game').on('click', '.square', function() {
      userClicked.push(this.classList[1]);

      if(pattern.length > 0 && this.classList[1] !== pattern[userClicked.length - 1]) {
        $('.game-over').show();
        pattern = [];
        userClicked = [];
      } else if(userClicked.length === pattern.length) {
        userClicked = [];
        score++;
        $('.points').text(score);
        setTimeout(function() {
          if(pause > 200) {
            pause -= 200;
          }
          playRound();
        }, 500);
      }

    });

  };

  $('.start').on('click', function() {
    play();
  });

  $('.game').on('mousedown', '.square', function() {
    flashSquare(this.classList[1], 0, 100, 0);
  });

});