$(function() {
  var buildPyramid = function(base) {
    $('.pyramid').html('');
    var level = base;
    while(level > 0) {
      $('.pyramid').prepend('<div class="row' + level + '"></div>');
      for(var i = 0; i < level; i++) {
        $('.row' + level).append('<div class="block"></div>');
        if(level) {
          $('.row' + level).css('margin-left', (25 + (base - level) * 25) + 'px');
        }
      }
      level--;
    }
  };

  buildPyramid($('select').val());

  $('select').on('change', function() {
    buildPyramid($('select').val());
  });
  
});