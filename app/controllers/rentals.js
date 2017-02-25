import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
      createRental: function() {
          var _that = this;
          var _name = this.get('name');
          var _units = this.get('units');
          var _sqft = this.get('sqft');
          var _bedrooms = this.get('bedrooms');
          var _rentaltype = this.get('type');
          var _address1 =  this.get('address1');
          var _address2 =  this.get('address2');

          var newRental = this.store.createRecord('rental', {
              name: _name,
              units: _units,
              sqft: _sqft,
              bedrooms: _bedrooms,
              type: _rentaltype,
              address1: _address1,
              address2: _address2
          });

          newRental.save();

          // newRental.save().then(function(response) {
          //     _that.set('responseMessage', "Thank you! We saved your email address with the following id: " + response.get('id'));
          //     _that.set('emailAddress', '');
          // });
      }
  }
});
