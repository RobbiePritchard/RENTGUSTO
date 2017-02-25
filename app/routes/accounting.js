import Ember from 'ember';

export default Ember.Route.extend({

  // List all rentals -- Financial Dashboard -- etc
  model: function() {
      return this.store.findAll('rental');
  }
});
