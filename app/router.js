import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("rants", {path: '/'}, function() {
    this.route("new");
  });
  this.resource("users", function() {
  });
  this.route("protected");
});

export default Router;
