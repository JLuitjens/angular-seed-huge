angular.module('app.mainController',['app.directives','app.factories'])
.controller('mainCtrl', function ($scope,aFactory) {
	console.log("mainCtrl started");

	$scope.message = {
		name: 'Hello World',
		address: 'Planet Earth'
	};
	aFactory.getData().then(function (data) {
		$scope.objects = data;
	}, function errorCallback(data) {
		console.log("failed to grab" + data);
	});
});