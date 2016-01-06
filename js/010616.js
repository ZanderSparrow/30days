var leapYear = function(year) {
  if((+year % 4 === 0) && (+year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};

$(function() {
  $('form').submit(function(event) {
    var year = parseInt($('input.year').val());
    var result = leapYear(year);

    $('#checked-year').text(year);
    if(result) {
      $('#not').text("");
    } else {
      $('#not').text("not");
    }

    event.preventDefault();
    $('.result').show();
  });
});