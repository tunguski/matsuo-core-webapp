'use strict';

/**
 * @ngdoc function
 * @name mt.ui.controller:NumerationsController
 * @description
 * # NumerationsController
 * Controller of the mt.ui
 */
angular.module('mt.webapp')
    .controller('NumerationsController', function NumerationsController($scope, $routeParams, $http, Numeration) {

      $scope.setTitle("Lista numeracji");

      Numeration.query({}, scopeSetter($scope, 'numerations'));
    });

