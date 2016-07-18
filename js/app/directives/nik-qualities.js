(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikQualities', nikQualities);

	function nikQualities() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-qualities.html'
		};
		return directive;
	}
})();