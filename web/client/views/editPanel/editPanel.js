Template.editPanel.rendered = function() {
	var $root = $(this.firstNode);
	$root.draggable();
};

Template.editPanel.events({
	"click :first-child": function() {
		// Prevent click event bubbles to parent.
		return false;
	}
});