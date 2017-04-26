import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  difficulty: DS.attr(),
  image: DS.attr(),
  trail-link: DS.attr(),
});
