(function () {
    'use strict';

    angular.module('myFirstApp', [])
        .controller('MyFirstControlller', function ($scope) {
            $scope.name = "Shayan";
            $scope.sayHello = function () {
                return "Hello Coursera!!";
            }
        });
})();