String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

var removePunctuation = function(message) {
  var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  var spaceRE = /\s+/g;
  return message.replace(punctRE, '').replace(spaceRE, '');
}

var squarify = function(message) {
  //return an array of the squared message
  var squareSize = Math.ceil(Math.sqrt(message.length));
  var squareArray = [];
  for(var i = 0; i < message.length; i += squareSize) {
    squareArray.push(message.substring(i, i + squareSize));
  }
  return squareArray;
}

var codify = function(arrMessage) {
  //rearrange the array into an encoded message, add spaces
  var encrypted = '';
  for(var i = 0; i < arrMessage[0].length; i++) {
    arrMessage.forEach(function(string) {
      //don't add 'undefined' to end
      if(string[i]) {
        encrypted += string[i];
      }
    });
  }
  //add spaces
  if(encrypted.length > 5) {
    for(var i = 5; i < encrypted.length; i += 6) {
      encrypted = encrypted.insert(i, " ");
    }
  }
  
  return encrypted;
}

var cryptoSquare = function(message) {
  //prepare message for squaring
  var encrypted = removePunctuation(message.toLowerCase());
  return codify(squarify(encrypted));
};

$(function() {
  $('#encrypt-form form').submit(function(event) {
    var text = $('input#message').val();
    var result = cryptoSquare(text);

    $('#result p').text(result);

    event.preventDefault();
    $('#result').show();
    //Clear the field
    $('input#message').val('');
  });
});