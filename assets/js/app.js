angular.module('app', ['ui.router', 'app.directives', 'app.mainController', 'app.otherController', 'app.filters', 'app.services', 'app.factories'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('main', {
					url: '/main',
					views: {
						'': {
							templateUrl: 'assets/views/main.html',
							controller: 'mainCtrl'
						}
					}
				}
			)
			.state('other', {
					url: '/other',
					views: {
						'': {
							templateUrl: 'assets/views/other.html',
							controller: 'otherCtrl'
						}
					}
				}
			);
		$urlRouterProvider.otherwise('/main');
	}]);