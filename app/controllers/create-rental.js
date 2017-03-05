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
          var _rent = this.get('rent');

          let unit = this.store.createRecord('unit', {
            unit_name: 'test unit name',
            rent: _rent
          });

          unit.save();

          var newRental = this.store.createRecord('rental', {
              name: _name,
              sqft: _sqft,
              bedrooms: _bedrooms,
              type: _rentaltype,
              address1: _address1,
              address2: _address2,
              rent: _rent
          });

          newRental.get('units').pushObject(unit);

          newRental.save().then(function(rental){
            console.log('the units are ' + _units);

          });
      },
      addUnit: function(val) {
           this.get('units').pushObject({unit_name: val});
      },
      getUnits: function() {
        return this.get('units');
      }
  }
});
