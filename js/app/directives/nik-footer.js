(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikFooter', nikFooter);

	function nikFooter() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-footer.html'
		};
		return directive;
	}
})();