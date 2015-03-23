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

    saveRant: function() {

      // GET INFO AND SEND TO UPPER CONTROLLER 

      this.sendAction('saveRant', rant);
    }

  }
});
