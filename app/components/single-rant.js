import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["rant"],
  stringCounter: function(){
    var input = this.get('body');
    return input.length;
  }.property('body'),

  isOwner: function(){
    var sessionId = this.get('session').get('user_id');
    var rantId = this.get('rant').get('user').get('data').id;
    console.log(sessionId, "SESSIONID");
    console.log(rantId, "RANTID");
    console.log(sessionId === rantId);

    return sessionId === rantId;

  }.property('session', 'user_id', 'rant'),

  actions: {
    editRant: function(rant) {
      this.sendAction('editRant', rant);
    },

    cancelRant: function(rant) {
      this.sendAction('cancelRant', rant);
    },

    updateRant: function(rant) {
      this.sendAction('updateRant', rant);
    },

    deleteRant: function(rant) {
      this.sendAction('deleteRant', rant);
    }


  }
});
