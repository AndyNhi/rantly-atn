import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["rant"],
  stringCounter: function(){
    var input = this.get('body');
    return input.length;
  }.property('body'),

  actions: {
    editRant: function(rant) {
      this.sendAction('editRant', rant);
    },

    cancelRant: function(rant) {
      this.sendAction('cancelRant', rant);
    },

    updateRant: function(rant) {
      this.sendAction('updateRant', rant);
    }

  }
});
