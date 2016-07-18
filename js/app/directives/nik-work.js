(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikWork', nikWork);

	function nikWork() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-work.html'
		};
		return directive;
	}
})();