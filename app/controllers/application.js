import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    newRant: function() {
      this.transitionToRoute('/new')
    }
  }

});
