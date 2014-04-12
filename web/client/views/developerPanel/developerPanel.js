Template.developerPanel.events({
    "click #resetDB": function() {
        Meteor.call("clearDB");
    }
});