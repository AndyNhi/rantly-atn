import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('rant', {q: params});
  },

  actions: {
	   loading: function() {
	      var view = this.container.lookup('view:loading').append();
	      this.router.one('didTransition', view, 'destroy');
	   }
	 }

});
