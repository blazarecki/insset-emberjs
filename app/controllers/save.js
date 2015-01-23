import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        end: function() {
            var that = this;
            this.get('model').save().then(function() {
                that.transitionToRoute('scores');
            });
        }
    }
});
