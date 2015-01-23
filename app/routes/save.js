import Ember from 'ember';

export default Ember.Route.extend({
    model: function(attrs) {
        return this.store.find('user', attrs.id);
    }
});
