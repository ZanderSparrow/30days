$(function() {
  function getRandomColor() {
    var c1 = Math.floor(Math.random()*255 + 1);
    var c2 = Math.floor(Math.random()*255 + 1);
    var c3 = Math.floor(Math.random()*255 + 1);
    return "rgb(" + c1 + "," + c2 + "," + c3 + ")";
  }

  for(var i = 2; i <= 60; i++) {
    $('select').append('<option>' + i + '</option>');
  }
  var sideLen = 600;
  var div = '<div class="square"></div>';
  $('.grid').append(div);
  $('.square').css("width", sideLen + "px").css("height", sideLen + "px");

  $('select').on('change', function() {
    var numDivs = this.value;
    sideLen = Math.floor(600 / +numDivs);
    $('.grid').css("width", sideLen * +numDivs).css("height", sideLen * +numDivs);
    $('.grid').html('');
    for(var j = 0; j < +numDivs * +numDivs; j++) {
      $('.grid').append(div);
    }
    $('.square').css("width", sideLen + "px").css("height", sideLen + "px");
  });

  $('section').on('click', '.square', function() {

    $(this).css("background-color", getRandomColor());
  });

});