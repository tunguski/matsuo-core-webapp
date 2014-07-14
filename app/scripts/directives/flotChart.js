'use strict';

angular.module('mt.webapp')
    /**
     * @ngdoc function
     * @name mt.webapp.directive:FlotChart
     * @description
     * # FlotChart
     * Directive of the mt.webapp
     */
    .directive('flotChart', function($timeout) {
      return {
        restrict: 'EA',
        link: function(scope, elem, attrs) {
          var chart;
          elem.show();
          $timeout(function () {
            var data = scope.$eval(attrs.ngModel);
            if (data) {
              chart = $.plot(elem, data, scope.$eval(attrs.flotChart) || {});
            }
          }, 100);

          scope.$watch(attrs.ngModel, function(n) {
            $timeout(function () {
              if (n) {
                chart = $.plot(elem, n, scope.$eval(attrs.flotChart) || {});
              }
            }, 100);
            // version with redrawing same flot is buggy(?)
//            if (!chart) {
//            } else {
//              chart.setData(n);
//              chart.setupGrid();
//              chart.draw();
//            }
          });
        }
      };
    })
;
