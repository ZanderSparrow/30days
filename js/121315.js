$(function() {
	function addBadgers() {
		var output = '<p>Badger ';
		for( var i = 0; i < 11; i++) {
			output += 'badger ';
		}
		output += '</p>';
		return output;
	}

	function addMushrooms() {
		return '<p>mushroom mushroom</p>';
	}

	$('.ipsum').on('click', '.btn', function(e) {
		e.preventDefault();
		var numP = $('#appendedInputButton').val();
		var count = 1;
		var target = $('.ipsum-text');
		target.html('');
		var badgers = addBadgers();
		var mushrooms = addMushrooms();
		while(count <= +numP) {
			if(count === 10 || count % 10 === 0) {
				target.append("<p><strong>AARRGH</strong> a snake, a snake, ah-ooooo it's a snaaake!</p>");
			} else if(count % 2 === 0) {
				target.append(mushrooms);
			} else {
				target.append(badgers);
			}
			count++;
			
		}
	});
});