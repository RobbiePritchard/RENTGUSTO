import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

      saveRental: function() {
          var _that = this;
          var email = this.get('emailAddress');

          var newRental = this.store.createRecord('rental', {
              name: 'test rental firebase',
              units: 40
          });

          newRental.save().then(function(response) {
              _that.set('responseMessage', "Thank you! We saved your email address with the following id: " + response.get('id'));
              _that.set('emailAddress', '');
          });
      }
  }
});
