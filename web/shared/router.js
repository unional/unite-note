Router.configure({
	layoutTemplate: "masterLayout"
});

Router.map(function() {
	this.route('main', {path: '/'});
	this.route("main", {
		path: "/:id",
		// waitOn: function() {
		// 	return Meteor.subscribe("entities");
		// },
		data: function() {
			return this.params.id;
		}
	})
});
