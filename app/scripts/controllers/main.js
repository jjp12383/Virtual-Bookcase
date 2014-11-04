'use strict';

/**
 * @ngdoc function
 * @name bookcaseAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookcaseAngularApp
 */
angular.module('bookcaseAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
