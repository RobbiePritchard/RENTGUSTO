import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // var thisProperty = this.store.find('rental', { name: "Peter" });
    console.log('the rental id is ' + params.rental_id);
    // return thisProperty;
  }
});
