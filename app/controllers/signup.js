import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    signUp: function () {
      var firstName = this.get('firstName');
      var lastName = this.get('lastName');
      var email = this.get('email');
      var password = this.get('password');
      var self = this;

      var user = this.store.createRecord('user',
        {first_name: firstName,
         last_name: lastName,
         email: email,
         password: password});

      self.set('firstName', '');
      self.set('lastName', '');
      self.set('email', '');
      self.set('password', '');

      user.save().then(function () {
        self.transitionToRoute('rants');
        Ember.run.later(function () {
          Ember.$('.rant-item');
        }, 300);
      }.bind(self));
    },
  }
});
