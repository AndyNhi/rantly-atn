import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  },

  actions: {
    loading: function() {
	      var view = this.container.lookup('view:loading').append();
	      this.router.one('didTransition', view, 'destroy');
	    }
	 }



});
