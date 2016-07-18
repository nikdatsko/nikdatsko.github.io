(function() {
    'use strict';

    angular
        .module('NikApp', ['ngRoute', 'ui.bootstrap', 'nvd3'])
        .config(Config);

    Config.$inject = ['$httpProvider'];

    function Config($httpProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');
    }
})();