'use strict';

angular.module('mt.webapp')
    /**
     * @ngdoc function
     * @name mt.webapp.directive:RoundedIconBox
     * @description
     * # RoundedIconBox
     * Directive of the mt.webapp
     */
    .directive('roundedIconBox', function() {
      return {
        restrict: 'EA',
        templateUrl: '/views/templates/roundedIconBox.html',
        link: function(scope, elem, attrs) {
        }
      };
    })
;