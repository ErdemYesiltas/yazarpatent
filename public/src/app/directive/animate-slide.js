angular.module('app').directive('slideTween', function ()
{
    function link(scope, element, attrs)
    {

        scope.$watch("left", function (value)
        {
            if (value && !isNaN(value))
            {
                TweenMax.to(element, 1, {left:value, ease:Expo.easeInOut});
            }

        });
    }

    return {
        link:link
    };
});

angular.module('app').directive('absoluteSliderItem', function ()
{
    function link(scope, element, attrs)
    {
        var slideDuration = scope.slideDuration || 1;
        scope.$watch("absoluteSliderItem", function (value, oldVal)
        {
            if (oldVal !== value)
            {
                var parentW = element.parent().width();
                if (oldVal === true && value === false)
                {
                    TweenMax.to(element, slideDuration, {left:-parentW * scope.slideDirection, autoAlpha:0, display: "none", ease:Expo.easeInOut});
                }
                else if (value === true)
                {
                    TweenMax.fromTo(element, slideDuration, {left:parentW * scope.slideDirection, autoAlpha:0}, {left:0,display: "block", autoAlpha:1, ease:Expo.easeInOut});
                }
            }
            else if (value === true)
            {
                element.css("display", "block");
            }
        });
    }

    return {
        link:link,
        scope:{
            "absoluteSliderItem":"=",
            "slideDirection":"=",
            "slideDuration":"="

        }
    };
});

angular.module('app').directive('absoluteSliderSubAnim', function ()
{
    function link(scope, element, attrs)
    {
        var slideDuration = scope.slideDuration || 1;
        var slideDelay = scope.slideDelay || 0;
        scope.firstL = element.offset().left;
        element.css("position", "relative");
        scope.$watch("absoluteSliderSubAnim", function (value, oldVal)
        {
            var wW = $(window).width();
            if (oldVal === true && value === false)
            {
                TweenMax.to(element, slideDuration, {left:"" + (-wW / 2 * scope.slideDirection), display:"none", delay:slideDelay, ease:Expo.easeInOut});
            }
            else if (value === true)
            {
                TweenMax.fromTo(element, slideDuration, {left:"" + (wW * scope.slideDirection)}, {left:0, autoAlpha:1, display:"block", delay:slideDelay, ease:Expo.easeInOut});
            }
        });
    }

    return {
        link:link,
        scope:{
            "absoluteSliderSubAnim":"=",
            "slideDirection":"=",
            "slideDuration":"=",
            "slideDelay":"="
        }
    };
});

angular.module('app').directive('absoluteFadeInItem', function ()
{
    function link(scope, element, attrs)
    {
        var fadeInDuration = scope.fadeInDuration || 1;
        scope.$watch("absoluteFadeInItem", function (value, oldVal)
        {
            if (oldVal !== value)
            {
                if (oldVal === true && value === false)
                {
                    TweenMax.to(element, fadeInDuration, {css:{autoAlpha:0}, ease:Cubic.easeOut});
                }
                else if (value === true)
                {
                    TweenMax.to(element, fadeInDuration, {css:{autoAlpha:1}, ease:Cubic.easeOut});
                }
            }
            else if (value === true)
            {
                element.css("visibility","visible");
            }
        });
    }

    return {
        link:link,
        scope:{
            "absoluteFadeInItem":"=",
            "fadeInDuration":"="
        }
    };
});



angular.module("app").directive("akordiyonAnim", function ()
{
    function link(scope, element, attrs)
    {
        scope.$watch("akordiyonAnim", function (value)
        {
            if (value === true)
            {
                TweenMax.to(element, 0.5, {height:scope.targetHeight, ease:Expo.easeInOut})
            }
            else
            {
                TweenMax.to(element, 0.5, {height:0, ease:Expo.easeInOut})
            }
        })
    }

    return{
        link:link,
        scope:{
            "akordiyonAnim":"=",
            "targetHeight":"="
        }
    }
});

angular.module("app").directive("changeTextAnim", function ()
{
    function link(scope, element, attrs)
    {
        scope.$watch("changeTextAnim", function (value)
        {
            TweenMax.to(element, 0.5, {text:{value:"" + value}, ease:Linear.easeNone});
        })
    }

    return{
        link:link,
        scope:{
            "changeTextAnim":"="
        }
    }
});