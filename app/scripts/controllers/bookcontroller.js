'use strict';

/**
 * @ngdoc function
 * @name bookcaseAngularApp.controller:BookcontrollerCtrl
 * @description
 * # BookcontrollerCtrl
 * Controller of the bookcaseAngularApp
 */
angular.module('bookcaseAngularApp')
    .controller('BookCaseCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $http.get('data/bookcase.json')
            .success(function (data) {
                $scope.bookcase = data;
            });
    }]);
