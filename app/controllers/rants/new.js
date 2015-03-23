import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveRant: function() {

      var title = this.get('rantTitle');
      var body = this.get('rantBody');

      console.log(title, "TITLE");
      console.log(body, "BODY");
      console.log(user, "USER");

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
