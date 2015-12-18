$(function() {
  var divPart1 = '<div class="square ';
  var divPart2 = '"></div>';
  var numSquaresPerSide = 10;
  var numTurns;
  var gameOn = false;
  $('select').val('Easy');

  var difficulties = {
    Easy : { boats : 5, turns : 42 },
    Medium : { boats : 5, turns : 23 },
    Hard : { boats : 4, turns : 15 },
    Extreme : { boats : 2, turns : 5 }
  };

  for(var i = 0; i < numSquaresPerSide * numSquaresPerSide; i++) {
    $('.board').append(divPart1 + i + divPart2);
  }
  
  var clearBoard = function() {
    $('.square').removeClass('boat').removeClass('hit').removeClass('miss').removeClass('clicked');
    $('.turns-left').hide();
    $('.winner').hide();
    $('.game-over').hide();
  };

  var runGame = function(dif) {
    gameOn = true;
    $('.game-over').hide();
    $('.winner').hide();
    var numBoats = difficulties[dif].boats;
    numTurns = difficulties[dif].turns;

    $('.play p.turns-display').html(numTurns);
    $('.turns-left').show();

    for(var i = 0; i < numBoats; i++) {
      //add a boat to the board
      //get a random square
      var currentSquare = Math.floor(Math.random() * 100);
      //if it does not have the class boat add class
      while($('.' + currentSquare).hasClass('boat')) {
        currentSquare = Math.floor(Math.random() * 100);
      }
      $('.' + currentSquare).addClass('boat');
      //get random boat size
      var boatSize = Math.ceil(Math.random() * 8) + 1;
      //look for adjacent squares to add boat class to
      for(var j = 1; j < boatSize; j++) {
        var dice = Math.floor(Math.random() * 6) + 1;
        //look above
        if(currentSquare > 9 && dice > 4) {
          if(!$('.' + currentSquare - 10).hasClass('boat')) {
            currentSquare -= 10;
          }
        } else if(currentSquare % 10 !== 0 && dice < 3) {  //look right
          if(!$('.' + currentSquare - 1).hasClass('boat')) {
            currentSquare--;
          }
        } else if(currentSquare < 90 && dice < 5 && dice > 2) {   //look below
          if(!$('.' + currentSquare + 10).hasClass('boat')) {
            currentSquare += 10;
          }
        } else if(currentSquare % 10 !== 9) {   //look left
          if(!$('.' + currentSquare + 1).hasClass('boat')) {
            currentSquare++;
          }
        }
        $('.' + currentSquare).addClass('boat');
      }
    }
  };

  //Start an easy game by default
  runGame('Easy');

  $('.start').on('click', function() { 
    var diff = $('select').val();
    clearBoard();
    runGame(diff);
  });

  $('select').on('change', function() {
    clearBoard();
    var diff = $('select').val();
    runGame(diff);
  });

  $('.board').on('click', '.square', function() {
    if(gameOn) {
      if(!$(this).hasClass('clicked')) {
        $(this).addClass('clicked');
        if($(this).hasClass('boat')) {
          $(this).addClass('hit');
          if(!$('.boat').not('.hit').length) {
            $('.turns-left').hide();
            $('.winner').show();
            gameOn = false;
          }
        } else {
          numTurns--;
          $(this).addClass('miss');
          if(numTurns > 0) {
            $('.play p.turns-display').html(numTurns); 
          } else {
            $('.turns-left').hide();
            $('.game-over').show();
            gameOn = false;
          }
        }
      }
    }
  });
  

});