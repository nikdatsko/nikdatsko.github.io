(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikReferences', nikReferences);

	function nikReferences() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-references.html'
		};
		return directive;
	}
})();