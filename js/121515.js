$(function() {
  var pathway = "../resources/"
  var texts = ['descartes', 'bacon', 'aristotle', 'plato', 'russell', 'camus', 'hobbes', 'kafka', 'hume', 'kant', 'locke', 'tzu', 'nietzsche'];
  var getRandomText = function(arr) {
    return pathway + arr[Math.floor(Math.random() * arr.length)] + '.txt';
  }
  var getRandomSentence = function(arr) {
    var rand = Math.floor(Math.random() * arr.length)
    return arr[rand] + '. ';
  }

  var numSentences = 4;
  
  $('.generate').on('click', function() {
    $('.output').html('').hide();
    for(var i = 0; i < numSentences; i++) {
      var txt = getRandomText(texts);
      $.ajax({
        url: txt,
        dataType: "text",
        success: function(data) {
          var txt_array = data.split(".");
          txt_array.pop();
          var sentence = getRandomSentence(txt_array);
          $('.output').append('<p>' + sentence + '</p>');
        }
      });
    }
    $('.output').show();
  });
    
});