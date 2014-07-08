'use strict';

angular.module('mt.webapp')
    /**
     * @ngdoc function
     * @name mt.webapp.directive:FlotChart
     * @description
     * # FlotChart
     * Directive of the mt.webapp
     */
    .directive('flotChart', function() {
      return {
        restrict: 'EA',
        link: function(scope, elem, attrs) {
          var data = scope[attrs.ngModel];

          var chart = $.plot(elem, data, scope[attrs.flotChart] || {});
          elem.show();

          scope.$watch(attrs.ngModel, function(v) {
            if (!chart) {
              chart = $.plot(elem, v , scope[attrs.flotChart] || {});
              elem.show();
            } else {
              chart.setData(v);
              chart.setupGrid();
              chart.draw();
            }
          });
        }
      };
    })
;