angular.
    module('eventPlanning').
    component('eventPlanning', {
        templateUrl: 'app/event-planning/event-planning.html',
        controller: function EventPlanningController() {
            this.events = [{
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-check',
                title: '14/01/2017',
                content: 'Ouverture des inscriptions'
            }, {
                badgeClass: 'warning',
                badgeIconClass: 'glyphicon-remove',
                title: '04/02/2017',
                content: 'Fermeture des inscriptions'
            }, {
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-list-alt',
                title: '05/02/2017',
                content: 'Diffusions des groupes'
            }, {
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-play',
                title: '11/02/2017 à 9h',
                content: 'Ouverture'
            }, {
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-play',
                title: '11/02/2017 à 11h',
                content: 'Début du tournoi'
            }, {
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-play',
                title: '12/02/2017 à 11h',
                content: 'Début des phases finales'
            }, {
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-star',
                title: '12/02/2017 à 18h',
                content: 'Début du TOP 8'
            }, {
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-star',
                title: '12/02/2017 à 21h',
                content: 'Remise des prix'
            }];

            this.animateElementIn = function($el) {
                $el.removeClass('not-visible');
                $el.addClass('animated bounceIn');
            }

            this.animateElementOut = function($el) {
                $el.addClass('not-visible');
                $el.removeClass('animated bounceIn');
            }
        }
    });
