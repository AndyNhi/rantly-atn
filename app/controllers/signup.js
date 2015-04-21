import Ember from "ember";
import EmberValidations from 'ember-validations';

export default Ember.ArrayController.extend(EmberValidations.Mixin,{

  validations: {
    firstName: {
      format: {with: /^\S*$/, message: "First name can't be blank or contain spaces"}
    },
    lastName: {
      presence: {message: "Last can't be blank or contain spaces"}
    },
    email: {
      format: {with: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: 'Must be a valid email address'}
    },
    password: {
      length: {minimum: 8, messages: {tooShort: 'Must be at least 8 characters'}}
    }
  },

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
    }
  }
});
