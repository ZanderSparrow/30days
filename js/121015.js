$(function(){

	var today = new Date();
	var holiday = new Date(2015, 12, 25);
	var daysLeft = holiday.getDate() - today.getDate();
	console.log(daysLeft);

	for(var i = holiday.getDate(); i > 0; i--) {
		var box = $('<div class="container boxes">' + '<p>' + (holiday.getDate() - i + 1) + '</p>' + '</div>');
		if( i <= daysLeft) {
			box.addClass("future");
		}
		$('.calendar section').append(box);

	}
});