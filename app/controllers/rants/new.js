import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveRant: function() {

      var title = this.get('rantTitle');
      var body = this.get('rantBody');
      var user  = this.get('session.email');

      var rant = this.store.createRecord('rant', {user: user, body: body, title: title });
      console.log(rant, "RANT");
      this.set('rantTitle', '');
      this.set('rantBody', '');
      rant.save();
      this.flashMessage('saved!', '', 1500);
      this.transitionToRoute('rants');
    }
  }

});
