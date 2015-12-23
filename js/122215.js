String.prototype.insert = function(index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

String.prototype.capitalizeSentences = function() {
  var sentences = this.toLowerCase();
  sentences = sentences.replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  return sentences.charAt(0).toUpperCase() + sentences.substr(1); 
}

var piglatin = function(word) {
  var i = 0;
  if(word[0].toLowerCase() === 'q' && word[1].toLowerCase() === 'u') {
    word = word.substring(2) + word.substring(0,2);
  }
  
  //check if word is a word, not punctuation
  if(/[A-Z]/i.test(word[0])) {
    //test to catch my, try, fly, no vowel strings
    var lettersSeen = 0;
    //regex to test if char isn't a vowel, case insensitive (trailing i)
    while( /(?![AEIOU])[A-Z]/i.test(word[i]) && word.length - lettersSeen > 1) {
      word = word.substring(i + 1) + word[i]; 
      lettersSeen++;
    }
    return word + 'ay';
  } else {
    return word;
  }
  
}

var translate = function(text) {
  var translated = text.match(/[\w-']+|[^\w\s]+/g).map(piglatin);
  //join sentence, then strip the space between punctuation and words
  return translated.join(" ").capitalizeSentences().replace(/\s+(\W)/g, "$1");
}

$(function() {
  $('form').submit(function(event) {
    var text = $('textarea.message').val();
    var result = translate(text);
    if($('#large').is(':checked')) {
      $('div.result').addClass('large-letter');
    } else {
      $('div.result').removeClass('large-letter');
    }

    $('.result p').text(result);

    event.preventDefault();
    $('.result').show();
    //Clear the field
    $('.message').val('');
  });
});