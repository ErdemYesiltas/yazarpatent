angular.module('app').directive('fadeInIfReady', function () {

    function link(scope, element, attrs) {
        scope.$watch("fadeInIfReady", function(value) {
            if(value) {
                TweenMax.fromTo(element, 0.5, {alpha:0},{alpha:1, delay:0.5});
            }
        });
    }

    return {
        restrict:"A",
        link: link,
        scope:{
            "fadeInIfReady":"="
        }
    };
});