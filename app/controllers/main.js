import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        start: function() {
            this.get('model').set('score', 0);

            $('.play').show();
            $('.start').hide();

            var that = this;
            setTimeout(function() {
                that.transitionToRoute('save', that.get('model'));
            }, 1000*5);
        },

        click: function() {
            var currentScore = parseInt(this.get('model').get('score'));
            this.get('model').set('score', currentScore+1);
        },
    }
});
