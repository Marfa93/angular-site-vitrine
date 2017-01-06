angular.
    module('eventRegistration').
    component('eventRegistration', {
        template: 'Bonjour {{$ctrl.user}} ! Ici tu peux t\'inscrire',
        controller: function EventRegistrationController() {
            this.user = 'Boss';
        }
    });
