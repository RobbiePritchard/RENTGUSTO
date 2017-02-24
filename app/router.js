import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tenants');
  this.route('list-rentals');
  this.route('rentals');
});

export default Router;
