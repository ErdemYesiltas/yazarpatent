angular.module('app').directive('gaInputFormField', function () {
    function link(scope, element, attrs) {

        var obj = scope.gaInputFormField;
        obj.validate = function () {

            if (obj.required !== undefined && obj.required == false) {
                obj.isValid = true;
                if (obj.model && obj.model.length > 0 && obj.model != obj.def) {
//                    element.addClass("dirty-input");
                }
            } else {
                switch (obj.type) {
                case 0:
                    if (obj.model && obj.model.length > 0 && obj.model != obj.def) {
                        obj.isValid = true;
                        element.removeClass("not-valid");
//                        element.addClass("dirty-input");
                    } else {
                        obj.isValid = false;
                        element.addClass("not-valid");
                    }
                    break;
                case 1:
                    if (obj.model && obj.model.length > 0) {
                        obj.isValid = true;
                        element.parent().removeClass("not-valid");
//                        element.parent().addClass("dirty-input")
                    } else {
                        obj.isValid = false;
                        element.parent().addClass("not-valid");
                    }
                    break;
                }
            }

            return obj.isValid;
        };
        scope.$parent.arrFields.push(obj);
    }

    return {
        link: link,
        scope: {
            "gaInputFormField": "="
        }
    }
});

angular.module("app").directive("gaMaskNum", function () {

    function link(scope, element, attrs) {
        element.on('input', function (event) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }

    return {
        link: link
    }
});

angular.module("app").directive("gaMaskTimeSil", function () {

    function link(scope, element, attrs) {
        element.on('focusin', function (event) {
            element.parent().append("<span id='tempInputSpan'><input type='text'><span>:</span><input type='text'></span>");
            element.parent().css({"position": "relative"});
            $("#tempInputSpan").width(element.width());
            $("#tempInputSpan").css({"position": "absolute", "top": 0, "left": 0});
            $("#tempInputSpan input").css({"float": "left", width: element.width() / 3});
            $("#tempInputSpan span").css({"float": "left"});
        });
        element.on('input', function (event) {

        });
    }

    return {
        link: link
    }
});

angular.module("app").directive("gaMaskTime", function () {

    function link(scope, element, attrs) {
        element.on('input', function (event) {
            this.value = this.value.replace("_", "");
            var len = this.value.length;
            this.value = this.value.replace(/[^0-9]/g, '');
            /*for (var i = len; i < 4; i++) {
                this.value += "_";
            }*/
            this.value = this.value.substr(0, 2) + ":" + this.value.substr(2);
            this.value = this.value.substr(0, 5);

            this.setSelectionRange(len+1, len);
        });
    }

    return {
        link: link
    }
});


app.directive('currencyInput', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {

            return ctrl.$parsers.push(function (inputValue) {
                var inputVal = element.val();

                //clearing left side zeros
                while (inputVal.charAt(0) == '0') {
                    inputVal = inputVal.substr(1);
                }

                inputVal = inputVal.replace(/[^\d.\',']/g, '');

                var point = inputVal.indexOf(".");
                if (point >= 0) {
                    inputVal = inputVal.slice(0, point + 3);
                }

                var decimalSplit = inputVal.split(".");
                var intPart = decimalSplit[0];
                var decPart = decimalSplit[1];

                intPart = intPart.replace(/[^\d]/g, '');
                if (intPart.length > 3) {
                    var intDiv = Math.floor(intPart.length / 3);
                    while (intDiv > 0) {
                        var lastComma = intPart.indexOf(",");
                        if (lastComma < 0) {
                            lastComma = intPart.length;
                        }

                        if (lastComma - 3 > 0) {
                            intPart = intPart.slice(0, lastComma - 3) + "," + intPart.slice(lastComma - 3);
                        }
                        intDiv--;
                    }
                }

                if (decPart === undefined) {
                    decPart = "";
                }
                else {
                    decPart = "." + decPart;
                }
                var res = intPart + decPart;

                if (res != inputValue) {
                    ctrl.$setViewValue(res);
                    ctrl.$render();
                }

            });

        }
    };
});

angular.module("app").directive("gaMaskTimeTest", function () {
    function link(scope, element, attrs, ctrl) {
        return ctrl.$parsers.push(function (inputValue) {
            var inputVal = element.val();

//            //clearing left side zeros
//            while (inputVal.charAt(0) == '0') {
//                inputVal = inputVal.substr(1);
//            }

            inputVal = inputVal.replace(/[^\d.\',']/g, '');

            var point = inputVal.indexOf(".");
            if (point >= 0) {
                inputVal = inputVal.slice(0, point + 3);
            }

            var decimalSplit = inputVal.split(".");
            var intPart = decimalSplit[0];
            var decPart = decimalSplit[1];

            intPart = intPart.replace(/[^\d]/g, '');
            if (intPart.length > 3) {
                var intDiv = Math.floor(intPart.length / 3);
                while (intDiv > 0) {
                    var lastComma = intPart.indexOf(",");
                    if (lastComma < 0) {
                        lastComma = intPart.length;
                    }

                    if (lastComma - 3 > 0) {
                        intPart = intPart.slice(0, lastComma - 3) + "," + intPart.slice(lastComma - 3);
                    }
                    intDiv--;
                }
            }

            if (decPart === undefined) {
                decPart = "";
            }
            else {
                decPart = "." + decPart;
            }
            var res = intPart + decPart;

            if (res != inputValue) {
                ctrl.$setViewValue(res);
                ctrl.$render();
            }

        });
    }

    return {
        link: link,
        restrict: 'A',
        require: 'ngModel'
    }
});