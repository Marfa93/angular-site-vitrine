angular.
    module('eventNavbar').
    component('eventNavbar', {
        bindings: {
            brand: '<'
        },
        templateUrl: 'app/event-navbar/navbar.html',
        controller: function EventNavbarController() {
            this.menu = [{
                name: "Accueil",
                link: "#event-desc"
            }, {
                name: "Planning",
                link: "#planning"
            }, {
                name: "Inscription",
                link: "#registration"
            }];
        }
    });
