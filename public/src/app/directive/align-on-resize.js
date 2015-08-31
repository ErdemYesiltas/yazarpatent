angular.module('app').directive('alignVerticalCenterInContainer', ["$window", function ($window) {
    function link(scope, element, attrs) {
        var ofsetTop = Number(attrs.ofsetTop) || 0;
        function align() {
            var parentH = Number(element.parent().height());
            element.css("top", Number(parentH - element.height()) * 0.5 + ofsetTop);
        }

        align();
        $(window).bind('resize', function () {
            align();
        });
        setTimeout(align, 500);
    }

    return {
        link: link
    };
}]);

angular.module('app').directive('alignHorizontalCenter', ["$window", function ($window) {
    function link(scope, element, attrs) {
        var ofsetLeft = Number(attrs.ofsetLeft) || 0;
        function align() {
            var wh = $(window).width();
            element.offset({left: (wh - element.width()) * 0.5 + ofsetLeft});
        }

        align();
        $(window).bind('resize', function () {
            align();
        });
        setTimeout(align, 500);
    }

    return {
        link: link
    };
}]);

angular.module('app').directive('alignOnResize', function () {
    function link(scope, element, attrs) {
        $(window).bind('resize', function () {
            //var ww = $(window).width();
            var ww = $(window).width();
            var wh = $(window).height();
            switch (attrs.alignV) {
            case "center":
                element.offset({top: (wh - element.height()) * 0.5});
                break;
            case "bottom":
                element.offset({top: wh - element.height()});
                break;
            case "top":
                element.offset({top: 0});
                break;
            }
            switch (attrs.alignH) {
            case "center":
                element.offset({left: (ww - element.width()) * 0.5});
                break;
            case "right":
                element.offset({left: ww - element.width()});
                break;
            case "left":
                element.offset({left: 0});
                break;
            }

//            element.offset({top: (wh - element.width()) * 0.5});
        });
        setTimeout(function () {
            $(window).trigger("resize")
        }, 500);
    }

    return {
        link: link
    };
});

angular.module('app').directive('heightPercent', function () {
    function link(scope, element, attrs) {
        function setSize() {
            var wh = $(window).height();
            var newH = wh / 100 * Number(attrs.heightPercent);
            element.css("height", newH+"px");
        }

        setSize();
        $(window).resize(setSize);
    }
    return {
        restrict: 'A',
        link: link,
        replace: false
    };
});