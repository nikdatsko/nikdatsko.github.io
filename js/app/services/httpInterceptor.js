(function() {
    'use strict';

    angular
        .module('NikApp')
        .factory('HttpInterceptor', HttpInterceptorFactory);

    HttpInterceptorFactory.$inject = ['$q'];

    function HttpInterceptorFactory($q) {

        var HttpInterceptor = {
            request: request
        };

        return HttpInterceptor;

        function request(req) {
            var viewsUrl = /^.*\/app\/.*/;
            if (viewsUrl.test(req.url)) {
                var version = '?v=1.5';
                req.url = req.url + version;
            }


            return req;
        }

    }
})();
