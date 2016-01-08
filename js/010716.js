var encrypt = function(string, key) {
  var result = '';
  // for each character in the string:
  for(var i = 0; i < string.length; i++) {
    var charCode = string.charCodeAt(i);
    if(charCode >= 97 && charCode <= 122) {
      //Lowercase letter
      result += String.fromCharCode(97 + (charCode - 97 + key) % 26);
    } else if(charCode >= 65 && charCode <= 90) {
      //Capital letter
      result += String.fromCharCode(65 + (charCode - 65 + key) % 26);
    } else {
      result += string[i];
    }
  }  
  return result;
};

$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var message = $('.input').val();
    var key = $('.key').val();
    $('#result h3').text("Your encrypted message: " + encrypt(message, +key));

    $('#result').show();
  });
});