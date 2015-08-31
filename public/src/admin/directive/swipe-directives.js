angular.module('app').directive('swipeGesture', function () {
    return {
        restrict: 'A',
        scope: {
            "swipeGesture": '=',
            "swipeLeftParam": '=',
            "swipeRightParam": '='
        },
        link: function (scope, element, attrs) {
            element.bind('swipeleftdown', function (e) {
                scope.$apply(scope.swipeGesture(scope.swipeLeftParam));
            });
            element.bind('swiperightdown', function (e) {
                scope.$apply(scope.swipeGesture(scope.swipeRightParam));
            });
        }
    };
});
