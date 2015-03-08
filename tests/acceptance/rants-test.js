import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Rants', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('rants crud', function() {
  visit('/');
  click('New Rant')
  fillIn('.rant-header-title > textarea', 'Cool Title')
  fillIn('.rant-item-content > textarea', 'Cool Body')
  click('Save')
  andThen(function() {
    equal(find('.rant-header-title > h3').text().trim(), 'Cool Rant');
    equal(find('.rant-item-content').text().trim(), 'Cool Rant');
  });
});
