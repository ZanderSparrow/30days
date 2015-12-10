$(function(){
	$('h1').slideDown(1000, function() {
		setTimeout(function() {
			$('.greeting').fadeIn(500, function() {
				$('.next-line').fadeIn();
			});
		}, 200);
		
	});
});