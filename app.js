var app = angular.module('camuInmueblesApp', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<h1>This is home</h1>'
            })
            .when('/inmuebles/:proyecto', {
                templateUrl: 'views/inmuebles.html',
                controller: 'InmuebleCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    }
]);