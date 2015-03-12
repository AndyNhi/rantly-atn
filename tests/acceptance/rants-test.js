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
  click('button.new-rant');
  fillIn('.rant-header-title > input', 'Cool Title');
  fillIn('.rant-item-content > textarea', 'Cool Body');
  click('span.save-rant');
  andThen(function() {
    equal(find('.rant-header-title > h3').text().trim(), 'Cool Rant');
    equal(find('.rant-item-content').text().trim(), 'Cool Rant');
  });
});
