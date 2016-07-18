(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikAbout', nikAbout);

	function nikAbout() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-about.html'
		};
		return directive;
	}
})();