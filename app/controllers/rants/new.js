import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {
    saveRant: function() {

      var title = this.get('rantTitle');
      var body = this.get('rantBody');
      var userid = this.get('session.user_id');
      var self = this;

      this.store.find('user', userid).then(function(userobject) {
        var rant = self.store.createRecord('rant', {user: userobject, body: body, title: title });
        self.set('rantTitle', '');
        self.set('rantBody', '');
        rant.save().then(function (){
          self.transitionToRoute('rants');
        });
      })
    },

    cancelRant: function() {
      this.transitionToRoute('rants');
    }
  }

});
