import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      createTenant: function() {
          var _that = this;
          var _firstname = this.get('firstname');
          var _lastname = this.get('lastname');

          var tenant = this.store.createRecord('tenant', {
              firstname: _firstname,
              lastname: _lastname
          });

          // newRental.get('units').pushObject(unit);
          tenant.save().then(function(tenant){
            console.log('Created new tenant ');
          });

      },

  }

});
