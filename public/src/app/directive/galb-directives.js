angular.module('app').directive('galbAlignVerticalCenter', function () {
    function link(scope, element, attrs) {
        var ofsetTop = Number(attrs.ofsetTop) || 0;
        scope.align = function () {
            if (element.height() <= 0) {
                element.hide();
            } else {
                element.show();
            }
            var wh = Number($(window).height());
            element.css("top", Number(wh - element.height()) * 0.5 + ofsetTop);

            scope.$broadcast("ALIGN");
        };

        scope.onImageLoaded = function () {
            scope.align();
            scope.$broadcast("INIT");
        };
        scope.align();
        $(window).bind('resize', function () {
            scope.align();
        });

    }

    return {
        link: link
    };
});

angular.module('app').directive('galbAlignVerticalCenterInContainer', function () {
    function link(scope, element, attrs) {
        var ofsetTop = Number(attrs.ofsetTop) || 0;
        var align = function () {
            var parentH = Number(element.parent().height());
            element.css("top", Number(parentH - element.height()) * 0.5 + ofsetTop);
        };

        scope.$on("ALIGN", align);
    }

    return {
        link: link
    };
});

angular.module('app').directive('galbImage', ["$window", function ($window) {
    function link(scope, element, attrs) {
        element.bind("load", function () {
            try {
                scope.onImageLoaded();
            } catch (e) {
            }
        });

        var onWindowResize = function () {
            var wh = $($window).height();
            var ww = $($window).width();

            if (wh < element.initialH || ww < element.initialW) {
                element.height(wh - 30);
                if (element.is("img") === true) {
                    element.width("auto");
                }
                if (element.width() > ww) {
                    if (element.is("img") === true) {
                        element.height("auto");
                    }
                    element.width(ww - 30);
                }
            } else {
                if (element.is("img") === true) {
                    element.height("auto");
                }else {
                    element.height(element.initialH);
                    element.width(element.initialW);
                }
            }

            scope.align();
        };

        $($window).bind('resize', onWindowResize);

        scope.$on("$destroy", function () {
            $($window).unbind('resize', onWindowResize);
        });

        scope.$on("INIT", function () {
            element.initialH = element.height();
            element.initialW = element.width();
            onWindowResize();
        });
    }

    return {
        link: link
    };
}]);
