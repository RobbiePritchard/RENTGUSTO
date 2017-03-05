import DS from 'ember-data';

export default DS.Model.extend({
  rental: DS.belongsTo('rental'),
  name: DS.attr('string'),
  rent: DS.attr('number'),
  tenants: DS.hasMany('tenant')
});
