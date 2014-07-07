'use strict';

/**
 * @ngdoc function
 * @name mt.webapp.controller:NumerationsController
 * @description
 * # NumerationsController
 * Controller of the mt.webapp
 */
angular.module('mt.webapp')
    .controller('NumerationsController', function NumerationsController($scope, $routeParams, $http, Numeration) {

      $scope.setTitle("Lista numeracji");

      Numeration.query({}, scopeSetter($scope, 'numerations'));
    });

