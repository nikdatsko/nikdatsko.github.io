(function() {
    'use strict';

    angular
        .module('NikApp')
        .config(NikRouts);

    NikRouts.$inject = ['$routeProvider', '$locationProvider'];

    function NikRouts($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/app/views/nik-main.html'
            })
            .when('/portfolio', {
                templateUrl: 'js/app/views/nik-portfolio.html'
            })
            .otherwise({redirectTo : '/'});

        $locationProvider.html5Mode(true);
    }
})();
