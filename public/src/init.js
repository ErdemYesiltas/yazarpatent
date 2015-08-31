var app = angular.module('app', ['ngSanitize', 'ngRoute', 'ngAnimate']);
app.factory("AppData", function () {
    return {};
});

app.factory("EVENTS", function () {
    return {
        TODO_ADDED: "todo_added",
        TODO_DELETED: "todo_added"
    };
});

app.config(["$routeProvider","$locationProvider",function ($routeProvider, $locationProvider) {
    //$routeProvider
    //    .when('/main', {templateUrl: '/view/main.html', controller: 'MainController', reloadOnSearch: false})
    //    .when('/', {templateUrl: '/view/home.html', controller: 'HomeController', reloadOnSearch: false})
    //    .otherwise({redirectTo: '/'});
    //
    //$locationProvider.html5Mode(true);

//    $sceDelegateProvider.resourceUrlWhitelist([
//        // Allow same origin resource loads.
//        'self',
//        // Allow loading from our assets domain.  Notice the difference between * and **.
//        'http://www.youtube.com/**']);
}]);

app.run(["$http", "$location", "AppData",function ($http, $location, AppData) {

}]);

app.run(["$rootScope", "$location", "$http", "AppData", function ($rootScope, $location, $http, AppData) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
    });
    $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
        AppData.currentPath = $location.path();
    });
}]);
