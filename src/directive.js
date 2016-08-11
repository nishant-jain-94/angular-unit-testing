function superButton() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			label: '=',
			callback: '&onClick'
		},
		template: '<div><div>{{label}}</div><button ng-click="callback()">Click me</button></div>'
	}
}

angular.module('directives',[])
	.directive('superButton',superButton);