function slidebackground() {
	console.log("slidebackground.js is ready.")
	var bgs = $(".slidebackground").children();
	$(bgs).each(function() {
		var src = $(this).attr("data-trigger");
		console.log("data-trigger");
	});
};