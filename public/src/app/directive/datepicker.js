angular.module('app').directive('datePicker', function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, elem, attrs, ngModelCtrl) {
//                jquery-ui kullanıyor.. js ve theme için css dosyalarının yüklü olması lazım..
            var updateModel = function (dateText) {
                scope.$apply(function () {
                    ngModelCtrl.$setViewValue(dateText);
                });
            };
            var options = {
                dateFormat: "dd/mm/yy",
                changeMonth: true,
                changeYear: true,
                yearRange: '1920:2015',
                onSelect: function (dateText) {
                    updateModel(dateText);
                },
                onChangeMonthYear:function(y, m, i){
                    var d = i.selectedDay;
                    var newDate = elem.datepicker('setDate', new Date(y, m - 1, d));
                    updateModel(newDate[0].value);
                }
            };
            elem.datepicker(options);
        }
    }
});

angular.module('app').directive('datePickerTwo', function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, elem, attrs, ngModelCtrl) {
//                jquery-ui kullanıyor.. js ve theme için css dosyalarının yüklü olması lazım..
            var updateModel = function (dateText) {
                scope.$apply(function () {
                    ngModelCtrl.$setViewValue(dateText);
                });
            };
            var options = {
                dateFormat: "dd/mm/yy",
                changeMonth: true,
                changeYear: true,
                yearRange: '2014:2015',
                onSelect: function (dateText) {
                    updateModel(dateText);
                },
                onChangeMonthYear:function(y, m, i){
                    var d = i.selectedDay;
                    var newDate = elem.datepicker('setDate', new Date(y, m - 1, d));
                    updateModel(newDate[0].value);
                }
            };
            elem.datepicker(options);
        }
    }
});