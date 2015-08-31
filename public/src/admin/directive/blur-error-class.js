angular.module('app').directive('ngBlurErrorClass', ['$parse', function($parse) {
    return {
		require: 'ngModel',
		link: function(scope, element, attr, ctrl) {
			var className = attr['ngBlurErrorClass'];
			var input = element[0];

			element.bind('focus', function(event) {
				scope.$apply(function() {
                    element.removeClass(className)
				});
			});
			
			element.bind('blur', function(event) {
				scope.$apply(function() {
                    if (ctrl.$invalid) {
                        element.addClass(className)
                    }
				});
			});
		}
	};
}]);
