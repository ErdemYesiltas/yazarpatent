angular.module('app').directive('ngDefaultValue', ['$parse', function($parse) {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {
            var defaultValue = $parse(attr['ngDefaultValue'])(scope);
            var input = element[0];

            ctrl.$parsers.unshift(function(viewValue) {
                if (viewValue != defaultValue) {
                    // it is valid
                    ctrl.$setValidity('default', true);
                    ctrl.$setValidity('valid', true);
                    return viewValue;
                } else {
                    // it is invalid, return undefined (no model update)
                    ctrl.$setValidity('default', false);
                    ctrl.$setValidity('valid', false);
                    return undefined;
                }
            });

            element.bind('keydown', function(event) {
                scope.$apply(function() {
                    if (input.value == defaultValue) {
                        input.value = "";
                        ctrl.$setValidity('default', true);
                    }
                });
            });

            element.bind('blur', function(event) {
                scope.$apply(function() {
                    if (input.value == "") {
                        input.value = defaultValue;
                        ctrl.$setValidity('default', false);
                        ctrl.$setValidity('valid', false);
                    }
                });
            });

            // set default value
            //		ctrl.$setValidity('valid', false);
            input.value = defaultValue;
            ctrl.$setViewValue(defaultValue);
        }
    };
}]);
