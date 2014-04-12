Template.searchPanel.rendered = function() {
};

Template.searchPanel.events({
	"click .form-search button": function(event) {
		return false;
	},
	"click #searchPanel": function() {
		// Prevent click event bubbles to parent.
		return false;
	}
});