import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tenants');
  this.route('rentals');
  this.route('accounting');
  this.route('dashboard');
  this.route('update-rental', { path: '/rentals/:rental_id' });
  this.route('create-rental');
  this.route('general-ledger');
  this.route('create-tenant');
});

export default Router;
