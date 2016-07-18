(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikTop', nikTop);

	function nikTop() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-top.html'
		};
		return directive;
	}
})();