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
    equal(find('nav > a:nth-child(1)').text().trim(), 'Rants');
    equal(find('nav > a:nth-child(2)').text().trim(), 'Users');
    equal(find('nav > a:nth-child(3)').text().trim(), 'Sign up');
  });

});
