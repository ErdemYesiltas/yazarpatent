angular.module('app').directive('addAttribute', function () {
    function link(scope, element, attrs) {
        scope.$watch("addAttribute", function (value) {
            if (value) {
                var split = value.split(",");
                element.attr(split[0], split[1]);
            }
        });
    }

    return {
        link: link,
        scope: {
            "addAttribute": "="
        }
    };
});
