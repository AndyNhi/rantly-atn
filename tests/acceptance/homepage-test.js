import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Homepage', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(){

  visit('/');

  andThen(function(){
    equal(currentPath(), 'rants');
    equal(find('.app-header-brand > a').text().trim(), 'Rantly');
  });

});
