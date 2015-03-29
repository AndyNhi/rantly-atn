import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.ArrayController.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',
  actions: {

    newRant: function() {
      this.transitionToRoute('/new');
    },

    search: null,

    doSearch: function() {
      var query = this.get('search');
      this.set('searchQuery', query);
      this.transitionToRoute('search', query);
    }

  }
});
