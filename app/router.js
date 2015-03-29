import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("rants", {path: '/'}, function() {
    this.resource("rant", {path: '/:rant_id'}, function() {});
    this.route("new");
  });
  this.resource("users", function() {
  });
  this.route("signup");
  this.route("search", {path: '/search/:query'});
});

export default Router;
