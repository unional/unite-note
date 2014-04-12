Template.hello.greeting = function() {
	return "Hello to you";
};

Template.hello.events({
	'click input': function() {
		if (typeof console !== 'undefined') {
			console.log("You pressed the button");
		}
	}
});