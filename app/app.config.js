angular.
    module('monApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider.
                when('/', {
                    template: '<event-description></event-description>'
                }).
                when('/planning', {
                    template: '<event-planning></event-planning><h1>Planning de ouf</h1>'
                }).
                when('/registration', {
                    template: '<event-registration></event-registration><h1>Gros Formaulaire</h1>'
                }).
                otherwise('/');
        }
    ]);
