var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

var numberInBase = function(n, b) {
  if(+n < b) {
    return digits[+n % b];
  } else {
    return numberInBase(Math.floor(+n / b), b) + digits[+n % b];
  }
};

$(function() {
  for(var o = 3; o <= 16; o++) {
    $('select').append('<option>' + o + '</option>');
  }

  $('.bases-form select').on('change', function() {
    $(this).closest('form').trigger('submit');
  });

  $('.bases-form form').on('submit', function(e) {
    e.preventDefault();
    var base = $('.base').val();
    var number = $('.number').val();
    var result = numberInBase(+number, +base);
    $('.result p').html("The number " + number + " in base " + base + " is: " + "<strong>" + result + "</strong>.");
    $('.result p').show();
  });
});