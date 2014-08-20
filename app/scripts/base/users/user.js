'use strict';

angular.module('mt.webapp')
    .controller('UserCtrl', function ($scope, $routeParams, User) {
      User.get({ idUser: $routeParams.idEntity }, function (user) {
        $scope.user = user;
      });

      $scope.datepickerOptions = {
        format: 'dd-mm-yyyy'
      };
    });
