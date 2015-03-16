import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveRant: function() {

      var title = this.get('rantTitle');
      var body = this.get('rantBody');

      // var user = Ember.Object.create({
      //   user_id: 1
      // })
      // create user model object not just regular object

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
