angular.module('app.otherController', ['app.filters', 'app.services'])
	.controller('otherCtrl', function ($scope, hexafy) {
		console.log("otherCtrl started");
		$scope.message = 'Other Controller says Hello World!';
		var preHex = 255;
		$scope.preHexValue = preHex;
		$scope.hex = hexafy.convert(preHex);
	});