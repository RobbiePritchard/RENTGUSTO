import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  unit: DS.belongsTo('unit'),
  rent: DS.attr('number'),
  payment_cycle: DS.attr('string')
});
