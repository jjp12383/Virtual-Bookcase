'use strict';

describe('Filter: bookFilter', function () {

  // load the filter's module
  beforeEach(module('bookcaseAngularApp'));

  // initialize a new instance of the filter before each test
  var bookFilter;
  beforeEach(inject(function ($filter) {
    bookFilter = $filter('bookFilter');
  }));

  it('should return the input prefixed with "bookFilter filter:"', function () {
    var text = 'angularjs';
    expect(bookFilter(text)).toBe('bookFilter filter: ' + text);
  });

});
