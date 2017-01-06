angular.
    module('eventPlanning').
    component('eventPlanning', {
        template: 'Bonjour {{$ctrl.user}} ! Ici c\'est le planning',
        controller: function EventPlanningController() {
            this.user = 'Boss';
        }
    });
