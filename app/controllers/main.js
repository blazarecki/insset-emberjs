import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        start: function() {
            this.get('model').set('score', 0);

            $('.play').show();
            $('.start').hide();

            var that = this;
            var date = new Date();
            date.setSeconds(date.getSeconds() + 10);
            $('#clock').countdown(date)
                .on('update.countdown', function(e) {
                    $('.countdown').html(e.offset.seconds);
                })
                .on('finish.countdown', function(e) {
                    that.transitionToRoute('save', that.get('model'));
                });
        },

        click: function() {
            var currentScore = parseInt(this.get('model').get('score'));
            this.get('model').set('score', currentScore+1);
        }
    }
});
