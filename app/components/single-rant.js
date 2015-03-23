import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["rant"],

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
