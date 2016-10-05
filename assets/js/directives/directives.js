angular.module('app.directives', [])
.directive('aDirective', function () {
	console.log("ran");
	return {
		template: 'Name: {{message.name}} Address: {{message.address}}'
	};
})
.directive('bDirective', function () {
	console.log("ran");
	return {
		template: 'Name: {{message.name}} Address: {{message.address}}'
	};
});