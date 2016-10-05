angular.module('app.filters', [])
	.filter('aFilter', function () {
		return function (x) {
			var i, c, txt = "";
			for (i = 0; i < x.length; i++) {
				c = x[i];
				c = c.toUpperCase();
				txt += c;
			}
			return txt;
		};
	});