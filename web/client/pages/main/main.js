Template.main.anchoredNodes = function () {
    return anchoredNodes.find();
};

Template.main.events({
    "click #canvas": function (event) {
        var id = anchoredNodes.insert({ mode: "edit", clientX: event.clientX, clientY: event.clientY });

        // This node will be focused.
        Router.go("/" + id);
        return false;
    }
});
