(function() {
    'use strict';

    angular
        .module('NikApp')
        .config(NikRouts);

    NikRouts.$inject = ['$httpProvider', '$routeProvider', '$locationProvider'];

    function NikRouts($httpProvider, $routeProvider, $locationProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');

        $routeProvider
            .when('/', {
                templateUrl: 'js/app/views/nik-main.html'
            })
            .when('/portfolio', {
                templateUrl: 'js/app/views/nik-portfolio.html'
            })
            .when('/contact', {
                templateUrl: 'js/app/views/nik-contact.html',
                controller: 'contactCtrl',
                controllerAs: 'contact'
            })
            .otherwise({redirectTo : '/'});

        $locationProvider.html5Mode(true);
    }
})();
