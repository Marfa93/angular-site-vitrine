angular.
    module('eventDescription').
    component('eventDescription', {
        template: '<h1>Bonjour {{$ctrl.user}} !</h1>',
        controller: function EventDescriptionController() {
            this.user = 'Monsieur';
        }
    });
