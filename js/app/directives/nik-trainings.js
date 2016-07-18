(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikTrainings', nikTrainings);

	function nikTrainings() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-trainings.html'
		};
		return directive;
	}
})();