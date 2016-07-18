(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikLanguages', nikLanguages);

	nikLanguages.$inject = ['$window'];

	function nikLanguages($window) {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-languages.html',
			link: function(scope, element) {
				var elTop, windowHeight = $window.innerHeight;
				angular.element($window).bind("scroll", function() {
					elTop = element[0].getBoundingClientRect().top;
					if (elTop-windowHeight+100 < 0) {
						scope.scrollLanguages = true;
					}
					scope.$apply();
				});
			}
		};
		return directive;
	}
})();