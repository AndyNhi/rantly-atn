import Ember from 'ember';

export default Ember.ArrayController.extend({
    itemController: 'rant',
    sortProperties: ['created_at'],
    sortAscending: false,
});
