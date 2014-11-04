'use strict';

/**
 * @ngdoc filter
 * @name bookcaseAngularApp.filter:bookFilter
 * @function
 * @description
 * # bookFilter
 * Filter in the bookcaseAngularApp.
 */
angular.module('bookcaseAngularApp')
  .filter('bookFilter', function () {
    return function (input) {
      return 'bookFilter filter: ' + input;
    };
  });
