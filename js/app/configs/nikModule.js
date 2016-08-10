(function() {
    'use strict';

    angular
        .module('NikApp', [
            'ngRoute',
            'ngSanitize',
            'ui.bootstrap',
            'ui.select',
            'nvd3'])
        .run(Run);

    Run.$inject = ['$http', '$httpParamSerializerJQLike'];

    function Run($http, $httpParamSerializerJQLike) {
        $http.defaults.transformRequest.unshift($httpParamSerializerJQLike);
    }
})();