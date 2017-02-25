import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bedrooms: DS.attr('number'),
  bathrooms: DS.attr('number'),
  sqft: DS.attr('number'),
  units: DS.attr('number'),
  type: DS.attr('string'),
  address1: DS.attr('string'),
  address2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string')
});
