import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$('#thissearch').keyup(function (event) {
      var value = Ember.$('#thissearch').val();
      if(event.which === 13 && value === ''){
        Ember.$('#thissearch').attr('placeholder', "This can't be blank!");
        event.stopPropagation();
        event.preventDefault();
      }
    });
  }
});
