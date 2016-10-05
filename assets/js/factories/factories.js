angular.module('app.factories', [])

	.factory('aFactory', ['$http', '$q', function ($http, $q) {

			return{
				doGet: function(url){
					var deferred = $q.defer();
					$http.get(url)
						.success(function(res){
							return deferred.resolve(res);
						})
						.error(function(res){ //handler errors here
							console.log(res);
							return deferred.reject(res);
						});
					return deferred.promise;
				},
				getData: function () {
					{
						//todo send filter inputs to rest api
						this.data = this.doGet("https://jsonplaceholder.typicode.com/users");
					}
					return this.data;
				}

			};

		}]
	);