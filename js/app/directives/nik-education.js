(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikEducation', nikEducation);

	function nikEducation() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-education.html'
		};
		return directive;
	}
})();