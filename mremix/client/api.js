Router.route('/', function () {
	this.render("navbar",{
		to:"navbar"
	});
	this.render("home",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route('/mremix', function () {
	this.render("navbar",{
		to:"navbar"
	});
	this.render("mremix",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route('/library', function () {
	this.render("navbar",{
		to:"navbar"
	});
	this.render("library",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});