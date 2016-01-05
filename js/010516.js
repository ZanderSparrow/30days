var adjustColors = function(x,y,z) {
  var colorMap = {10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f'};
  x = x > 9 ? colorMap[x] : x;
  y = y > 9 ? colorMap[y] : y;
  z = z > 9 ? colorMap[z] : z;
  custom = '#' + x + y + z;
  $('#custom').css('background-color', custom);
  $('#custom').closest('a').attr('data-color', custom);
};

$(function() {
  var canvas = $('#drawing-canvas')[0];
  $('#drawing-canvas').sketch();
  $('#clear').click(function() {
    canvas.width = canvas.width;
  });

  var x = 5;
  var y = 5;
  var z = 5;
  var custom;

  $('.slide').on('change', function() {
    if($(this).attr('id') === 'slide0') {
      x = $(this).val();
    } else if($(this).attr('id') === 'slide1') {
      y = $(this).val();
    } else {
      z = $(this).val();
    }

    adjustColors(x,y,z);
  });
});