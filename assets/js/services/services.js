angular.module('app.services', [])
	.service('hexafy', function () {
		this.convert = function (x) {
			return x.toString(16);
		}
	});