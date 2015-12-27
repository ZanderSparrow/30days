var RC = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]]

var roman = function(n) {
  if(n > 3999 || n < 1 || isNaN(n)) {
    return "ERROR";
  } else {
    var digit = 0;
    var rn = "";
    var current;
    while(n > 0) {
      // build up roman numeral
      current = n % 10;
      if(current === 4) {
        rn = RC[digit][0] + RC[digit][1] + rn;
      } else if(current === 9) {
        rn = RC[digit][0] + RC[digit+1][0] + rn;
      } else if(current > 0){
        for(var i = 0; i < current % 5; i++) {
          rn = RC[digit][0] + rn;
        } 
        if(current >= 5) {
          rn = RC[digit][1] + rn;
        }
      }
      // divide n by 10
      n = Math.floor(n / 10);
      // increment i
      digit++;
    }
    return rn;
  }
};

$(function() {
  $('.roman').on('submit', function(event) {
    var number = $('input#message').val();
    var result = roman(+number);

    $('.result p').text(result);

    event.preventDefault();
    $('.result').show();
    //Clear the field
    $('input#message').val('');
  });
});