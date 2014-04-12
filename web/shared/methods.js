Meteor.methods({
    clearDB: function() {
        anchoredNodes.remove({});
    }
});