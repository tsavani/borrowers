import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.resource('friend', function(){ });
  this.route('friends', function() {
    this.route('new');
    this.route('show', { path: ':friend_id'});
    this.route('edit', { path: ':friend_id/edit'});
  });
});


export default Router;
