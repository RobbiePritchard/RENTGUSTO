import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bedrooms: DS.attr('number'),
  bathrooms: DS.attr('number'),
  sqft: DS.attr('number'),
  num_units: DS.attr('number'),
  units: DS.hasMany('unit'),
  type: DS.attr('string'),
  address1: DS.attr('string'),
  address2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  rent: DS.attr('number'),
  available: DS.attr('boolean'),
  available_date: DS.attr('date'),
  tenant_water_resp_perc: DS.attr('number'),
  tenant_heat_resp_perc: DS.attr('number')
});
