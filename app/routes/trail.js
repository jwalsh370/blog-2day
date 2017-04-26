import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      trails: this.store.findAll('trail')
    });
  },

  actions: {
    saveTrail(params) {
      var newTrail = this.store.createRecord('trail', params);
      newTrail.save();
      this.transitionTo('index');
    }
  }
});
