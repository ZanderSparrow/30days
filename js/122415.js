$(function() {
  $('.open').on('click', function() {
    $('.content').addClass('pushed');
    $('.nav').addClass('expanded');
    $('.choices').slideDown();
    $('.close').show();
    $(this).hide();
  });

  $('.close').on('click', function() {
    $('.choices').slideUp(function() {
      $('.nav').removeClass('expanded');
      $('.content').removeClass('pushed');
      $('.open').show();
    });
    $(this).hide();
  });
});