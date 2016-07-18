(function() {
    'use strict';

    angular
        .module('NikApp')
        .factory('NikFactory', NikFactory);

    NikFactory.$inject = ['$http'];

    function NikFactory($http) {
        var service = {
            getPorfolio: getPorfolio
        };

        return service;

        function getPorfolio() {
            return $http.get('js/app/data/portfolio.json')
                .then(getPorfolioSuccess)
                .catch(getPorfolioFail);

            function getPorfolioSuccess(response) {
                return response.data
            }

            function getPorfolioFail(error) {
                return error
            }
        }
    }
})();