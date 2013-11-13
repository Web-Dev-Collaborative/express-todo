App.UsersController = Ember.ArrayController.extend({
	sortProperties: ['name'],
	sortAscending: true,
	userCount: function(){
		return this.get(model.length);
	}.property('@each')
});