(function(){

    var app = angular.module('hobook',['ngRoute']);

    //route angular

    app.config(['$routeProvider', function($routeProvider) {
      $routeProvider
     .when('/home', {
       templateUrl: 'home/home.html',
       controller : 'homeCtrl',
       controllerAs : 'lm',
     })
     .otherwise({
       redirectTo : '/home'
     });
 }]);
    //fin route

    //directive

})();
