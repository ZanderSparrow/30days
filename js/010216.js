var numToName = {0:"stone", 1:"parchment", 2:"blade", 3:"potion", 4:"amulet"};

Number.prototype.mod = function(n) {
  return ((this%n)+n)%n;
};

$(function() {

  $('.spbpa').on('change', function() {
    $('.result').fadeOut(1000, function() {
      $('.result').html('');
      var userPickName = $('form input[type=radio]:checked').attr('id');
      var userPickNum = $('form input[type=radio]:checked').val();

      var opponentNum = Math.floor(Math.random() * 5);
      var opponentName = numToName[opponentNum];

      var game_outcome = (+userPickNum - (+opponentNum)).mod(5);
      var message = '';

      if(game_outcome === 0) {
        message = "You have tied.";
      } else if(game_outcome < 3) {
        message = "You won!";
      } else {
        message = "You lose...";
      }

      $('.result').append('<p>You chose <strong>' + userPickName + '</strong>.</p>');
      $('.result').append('<p>Your opponent chose <strong>' + opponentName + '</strong>.</p>');
      $('.result').append('<p>' + message + '</p>');
      $('.result').fadeIn(1000);
    });
  });
});