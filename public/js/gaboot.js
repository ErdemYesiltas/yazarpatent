var isProd = false;

var paths, shims, allFiles;

if (isProd === true) {
    allFiles = ["gapp"];
    shims = [];
    paths = {gapp: "js/gapp.min"};
} else {

    //EDIT APPLICATION FILE LIST//
    var controllers = ["MainController"];
    var services = [];
    var filters = [];
    var directives = ["align-on-resize", "animate-fade", "animate-slide", "blur-error-class", "datepicker", "default-input-value", "dynamic-attribute", "focus-blur-events", "form-directives", "swipe-directives"];
    ////EDIT APPLICATION FILE LIST//

    paths = {init: "src/init"};
    shims = {};
    for (var i = 0; i < controllers.length; i++) {
        var ctrl = controllers[i];
        paths[ctrl] = "src/app/controller/" + ctrl;
        shims[ctrl] = {deps: ["init"].concat(directives)};
    }
    for (var j = 0; j < directives.length; j++) {
        var directive = directives[j];
        paths[directive] = "src/app/directive/" + directive;
        shims[directive] = {deps: ["init"]};

    }
    for (var k = 0; k < services.length; k++) {
        var service = services[k];
        paths[service] = "src/app/service/" + service;
        shims[service] = {deps: ["init"]};
    }
    for (var f = 0; f < filters.length; f++) {
        var filter = filters[f];
        paths[filter] = "src/app/filter/" + filter;
        shims[filter] = {deps: ["init"]};
    }
    allFiles = ["init"].concat(controllers).concat(services).concat(filters).concat(directives);
}

(function () {
    $(document).ready(function () {
        requirejs.config({
            urlArgs: "bust=" + (Math.random() * 10000),
            baseUrl: '/',
            waitSeconds: 30,
            paths: paths,
            shim: shims
        });
        requirejs(allFiles,
            function (allFiles) {
                angular.bootstrap(document, ['app']);
            });
    });
}());