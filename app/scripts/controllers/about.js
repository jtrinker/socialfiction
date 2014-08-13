'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
app.controller('AboutCtrl', ['$scope', '$firebase', 'authSvc', function ($scope, $firebase, authSvc) {
	
	$scope.logout = function() {
		authSvc.logout();
	}
}]);
