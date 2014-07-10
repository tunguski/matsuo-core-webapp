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
          var data = scope[attrs.ngModel];

          var chart;
          elem.show();
          $timeout(function () {
            chart = $.plot(elem, data, scope[attrs.flotChart] || {});
          }, 100);

          scope.$watch(attrs.ngModel, function(v) {
            if (!chart) {
              $timeout(function () {
                chart = $.plot(elem, data, scope[attrs.flotChart] || {});
              }, 100);
            } else {
              chart.setData(v);
              chart.setupGrid();
              $timeout(function () {
                chart.draw();
              }, 100);
            }
          });
        }
      };
    })
;
