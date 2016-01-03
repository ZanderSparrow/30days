$(function() {
  $('#date').datepicker({
    nextText: "Later",
    prevText: "Earlier",
  });
  $('form').on('submit', function(e) {
    e.preventDefault();
    $('.output').html('<p>You chose: ' + $('#date').val() + '</p>');
  });
  $( "#format" ).change(function() {
    $( "#date" ).datepicker( "option", "dateFormat", $(this).val() );
  });
});