import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bedrooms: DS.attr('number'),
  bathrooms: DS.attr('number'),
  squarefoot: DS.attr('number')
});
