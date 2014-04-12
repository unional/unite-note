function IdManager() {
	this.ids = [];
}

IdManager.prototype.create = function(prefix) {
	var id = prefix + Math.random().toString(36).substr(2, 5);
	while (_.contains(this.ids, id)) {
		id = prefix + Math.random().toString(36).substr(2, 5);
	}
	this.ids.push(id);
	return id;
};

IdManager.prototype.remove = function(id) {
	this.ids.splice(this.ids.indexOf(id), 1);
};

// idManager is package scope.
idManager = new IdManager();
