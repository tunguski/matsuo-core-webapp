'use strict';

angular.module('mt.webapp')
    .controller('UserCtrl', function ($scope, $routeParams, User) {
      User.get({ idUser: $routeParams.idEntity }, $scope.scopeSetter('user'));

      $scope.datepickerOptions = {
        format: 'dd-mm-yyyy',
        momentFormat: 'DD-MM-yyyy'
      };
    });
