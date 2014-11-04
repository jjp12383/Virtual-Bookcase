'use strict';

/**
 * @ngdoc function
 * @name bookcaseAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bookcaseAngularApp
 */
angular.module('bookcaseAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
