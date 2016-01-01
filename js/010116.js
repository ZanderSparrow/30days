var adjustColors = function(r,g,b) {
  rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  $('.color').css('background-color', rgb);
  $('.color-name').text(rgb);
  if(+r < 125 && +g < 125 && +b < 125) {
    $('.color-name').css('color', '#ddd');
  } else {
    $('.color-name').css('color', '#333');
  }
};

$(function() {
  var red = $('#red').val();
  var green = $('#green').val();
  var blue = $('#blue').val();
  var rgb;

  adjustColors(red, green, blue);

  $('.slide').on('change', function() {
    if($(this).attr('id') === 'red') {
      red = $(this).val();
    } else if($(this).attr('id') === 'blue') {
      blue = $(this).val();
    } else {
      green = $(this).val();
    }

    adjustColors(red, green, blue);
  });
});