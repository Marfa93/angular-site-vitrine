angular.
    module('eventDescription').
    component('eventDescription', {
        template: 'Bonjour {{$ctrl.user}} !',
        controller: function EventDescriptionController() {
            this.user = 'Boss';
        }
    });
