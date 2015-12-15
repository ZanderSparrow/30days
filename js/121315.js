$(function() {
	function addBadgers() {
		var output = 'Badger ';
		for( var i = 0; i < 11; i++) {
			output += 'badger ';
		}
		output += '\n\n';
		return output;
	}

	function addMushrooms() {
		return 'mushroom mushroom\n\n';
	}

	$('.ipsum').on('click', '.btn', function(e) {
		e.preventDefault();
		var numP = $('#appendedInputButton').val();
		var count = 1;
		var target = $('.ipsum-text textarea');
		target.html('');
		var badgers = addBadgers();
		var mushrooms = addMushrooms();
		var text = '';
		while(count <= +numP) {
			if(count === 10 || count % 10 === 0) {
				text += "AARRGH a snake, a snake, ah-ooooo it's a snaaake!\n\n";
			} else if(count % 2 === 0) {
				text += mushrooms;
			} else {
				text += badgers;
			}
			count++;
			
		}
		target.val(text);
		target.show();
	});
});