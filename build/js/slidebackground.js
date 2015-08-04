$(window).ready(function() {
	try {
		console.log("slidebackground.js is ready.");
		var bgs = $('.slidebackground').children();
		$(bgs).each(function(index, content) {
			var src = $(this).attr("src");
			$(this).css("background-image", "url("+src+")");
		});
	}
	catch(e) {
		console.log(e);
	}
});