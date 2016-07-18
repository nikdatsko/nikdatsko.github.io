(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikHeader', nikHeader);

	nikHeader.$inject = ['$window'];

	function nikHeader($window) {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-header.html',
			link: function(scope) {
				angular.element($window).bind("scroll", function() {
					scope.scrollHeader = this.pageYOffset > 10;
					scope.$apply();
				});
			}
		};
		return directive;
	}
})();