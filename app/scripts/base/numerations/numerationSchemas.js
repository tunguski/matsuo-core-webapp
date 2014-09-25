'use strict';

/**
 * @ngdoc function
 * @name mt.webapp.controller:NumerationsCtrl
 * @description
 * # NumerationsCtrl
 * Controller of the mt.webapp
 */
angular.module('mt.webapp')
    .controller('NumerationSchemasCtrl', function NumerationsCtrl($scope, NumerationSchema) {

      $scope.setTitle('Lista schematów numeracji');

      NumerationSchema.query({}, scopeSetter($scope, 'numerationSchemas'));
    });

