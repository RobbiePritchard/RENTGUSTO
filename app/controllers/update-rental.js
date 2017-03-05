import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      updateRental: function(record) {
          var _that = this;

          var _name = this.get('name');
          var _units = this.get('units');
          var _sqft = this.get('sqft');
          var _bedrooms = this.get('bedrooms');
          var _rentaltype = this.get('type');
          var _address1 =  this.get('address1');
          var _address2 =  this.get('address2');
          var _rent = this.get('rent');
          // var newRental = this.store.createRecord('rental', {
          //     name: _name,
          //     units: _units,
          //     sqft: _sqft,
          //     bedrooms: _bedrooms,
          //     type: _rentaltype,
          //     address1: _address1,
          //     address2: _address2,
          //     rent: _rent
          // });

          // newRental.save().then(function(rental){
          //   this.set(_name ,'');
          //   this.set('units', '');
          // });
          // store.findRecord('post', 1).then(function(post) {
          //   post.get('title'); // => "Rails is Omakase"
          //
          //   post.set('title', 'A new post');
          //
          //   post.save(); // => PUT to '/posts/1'
          // });

          this.store.findRecord('rental',record.id).then(function(post) {
            console.log("Found record + " + _that);

        

            post.save(); // => PUT to '/posts/1'
          });

      }
  }
});
