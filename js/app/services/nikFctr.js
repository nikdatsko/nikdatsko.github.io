(function () {
    'use strict';

    angular
        .module('NikApp')
        .factory('NikFactory', NikFactory);

    NikFactory.$inject = ['$http', '$q'];

    function NikFactory($http, $q) {
        var service = {
            getPorfolio: getPorfolio,
            sendForm: sendForm
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

        function sendForm(params) {
            var defer = $q.defer();
            var req = {
                method: 'POST',
                url: 'php/form.php',
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                data: params
            };

            $http(req)
                .success(function (data) {
                    defer.resolve(data);
                })
                .error(function (error, status) {
                    defer.reject(errorConstract(error, status));
                });
            return defer.promise;
        }

        function errorConstract(error, status) {
            return status ? {
                message: error,
                status: status
            } : error;
        }
    }
})();