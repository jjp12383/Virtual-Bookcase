'use strict';

/**
 * @ngdoc directive
 * @name bookcaseAngularApp.directive:bookDirective
 * @description
 * # bookDirective
 */
angular.module('bookcaseAngularApp')
    .directive('ngScopeElement', function () {
        var directiveDefinitionObject = {
            restrict: 'A',
            compile: function compile() {
                return {
                    pre: function preLink(scope, iElement, iAttrs) {
                        scope[iAttrs.ngScopeElement] = iElement;
                    }
                };
            }
        };
        return directiveDefinitionObject;
    })
    .directive('onFinishRender', function ($compile) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                var classArray = [],
                    currentClass,
                    gradient,
                    titleContainer,
                    authorContainer,
                    title,
                    author,
                    symbolScope = scope.books.symbol,
                    symbol,
                    symbolContainer,
                    titleTop,
                    titleHeight,
                    authorTop,
                    symbolSpace,
                    color,
                    weight,
                    family,
                    size,
                    pages = scope.books.pages,
                    width,
                    height,
                    bookTop;
                for (var i = 0; i < 7; i++) {
                    if (i === 0) {
                        currentClass = Math.floor((Math.random() * 7) + 1);
                    } else if (i === 2) {
                        currentClass = Math.floor((Math.random() * 3) + 1);
                    } else if (i === 3) {
                        currentClass = Math.floor((Math.random() * 8) + 20);
                    } else if (i === 4) {
                        currentClass = Math.floor(pages / 4);
                    } else if (i === 5) {
                        currentClass = Math.floor((Math.random() * 100) + 450);
                    } else {
                        currentClass = Math.floor((Math.random() * 2) + 1);
                    }
                    classArray.push(currentClass);
                }
                color = classArray[0];
                weight = classArray[1];
                family = classArray[2];
                size = classArray[3];
                width = classArray[4];
                height = classArray[5];
                gradient = scope.gradient;
                titleContainer = scope.titleContainer;
                authorContainer = scope.authorContainer;
                bookTop = Math.floor(600 - height);
                element.addClass('color-' + color).css({'margin-top': bookTop, 'min-width': width, 'height': height});
                gradient.css('height', height);
                titleContainer.css('font-size', size).addClass('font-weight-' + weight + ' ' + 'font-family-' + family);
                authorContainer.css('font-size', size).addClass('font-weight-' + weight + ' ' + 'font-family-' + family);
                title = scope.title;
                author = scope.author;
                titleHeight = title.height();
                titleTop = title.prop('offsetTop');
                authorTop = author.prop('offsetTop');
                symbolSpace = Math.floor(authorTop - (titleTop + titleHeight));
                symbol = $compile('<span' + ' ' + symbolScope + '></span>');
                symbolContainer = scope.symbol;
                setTimeout(
                    function() {
                        symbol(
                            scope,
                            function (clone) {
                                symbolContainer.append(clone);
                                symbolContainer.css('height', symbolSpace);
                                symbolContainer.children().css('max-height', (symbolSpace - 30));
                            }
                        );
                        scope.$digest();
                    },
                    250
                );
                scope.openBook = function () {
                    element.addClass('scale');
                };
            }
        };
    })
    .directive('boxGenerator', function () {
        return {
            restrict: 'A',
            link: function (scope) {
                var height = 450,
                    depth = 300,
                    width = 50,
                    front = scope.front,
                    back = scope.back,
                    top = scope.top,
                    bottom = scope.bottom,
                    left = scope.left,
                    right = scope.right;
                front.css({
                    'transform': 'translateZ(' + (depth - 1) + 'px)',
                    'height': height + 'px',
                    'width': width + 'px'
                });
                back.css({
                    'height': height + 'px',
                    'width': width + 'px'
                });
                top.css({
                    'transform': 'translateZ(' + depth + 'px) rotateX(-90deg)',
                    'height': depth + 'px',
                    'width': width + 'px'
                });
                bottom.css({
                    'height': depth + 'px',
                    'width': width + 'px',
                    'margin-top': depth + 'px'
                });
                left.css({
                    'height': height + 'px',
                    'width': depth + 'px'
                });
                right.css({
                    'transform': 'translateX(' + (width - depth) + 'px)' + 'rotateY(-270deg)',
                    'transform-origin': 'top right',
                    'height': height + 'px',
                    'width': depth + 'px'
                });
            }
        };
    })
    .directive('mandala1', function () {
        return {
            restrict: 'AC',
            templateUrl: 'partials/mandala1.html'
        };
    })
    .directive('celtic1', function () {
        return {
            restrict: 'AC',
            templateUrl: 'partials/celtic1.html'
        };
    })
    .directive('celtic2', function () {
        return {
            restrict: 'AC',
            templateUrl: 'partials/celtic2.html'
        };
    });