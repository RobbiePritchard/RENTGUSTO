import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
      saveRental: function() {
          var _that = this;
          var _name = this.get('name');
          var _units = this.get('units');

          var newRental = this.store.createRecord('rental', {
              name: _name,
              units: _units
          });
          var newSomething = this.store.createRecord('something', {
              name: _name,
              units: _units
          });
          newSomething.save();
          
          newRental.save().then(function(response) {
              _that.set('responseMessage', "Thank you! We saved your email address with the following id: " + response.get('id'));
              _that.set('emailAddress', '');
          });
      }
  }
});
