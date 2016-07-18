(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikSkills', nikSkills);

	nikSkills.$inject = ['$window'];

	function nikSkills($window) {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-skills.html',
			link: function(scope, element) {
				var elTop, elHeight, windowHeight = $window.innerHeight;
				angular.element($window).bind("scroll", function() {
					elTop = element[0].getBoundingClientRect().top;
					elHeight = element[0].offsetHeight;
					if (elTop-windowHeight+100 < 0) {
						scope.scrollSkills = true;
					}
					if (elTop-windowHeight+elHeight-100 < 0) {
						scope.scrollPrograms = true;
					}
					scope.$apply();
				});
			}
		};
		return directive;
	}
})();