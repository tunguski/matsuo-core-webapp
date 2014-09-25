'use strict';

/**
 * @ngdoc function
 * @name mt.webapp.controller:NumerationsCtrl
 * @description
 * # NumerationsCtrl
 * Controller of the mt.webapp
 */
angular.module('mt.webapp')
    .controller('NumerationsCtrl', function NumerationsCtrl($scope, Numeration) {

      $scope.setTitle('Lista numeracji');

      Numeration.query({}, scopeSetter($scope, 'numerations'));
    });

