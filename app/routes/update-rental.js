import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log('the rental id is ' + params.rental_id);

    return this.store.findRecord('rental', params.rental_id);
  }
});
