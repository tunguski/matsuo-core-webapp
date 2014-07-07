'use strict';

/**
 * @ngdoc function
 * @name mt.webapp.controller:UserInfoPanelController
 * @description
 * # UserInfoPanelController
 * Controller of the mt.webapp
 */
angular.module('mt.webapp')
    .controller('UserInfoPanelController', function ($scope, $rootScope, $http) {
      $scope.loadLoginTime = function () {
        $http.get('/api/login/loginTime').success(function (time) {
          $scope.loginTime = moment(parseInt(time));
        });
      };
      $scope.loadLoginTime();

      $rootScope.$on('loggedIn', function (event) {
        $scope.loadLoginTime();
      });

      $scope.loginDuration = '-';

      $scope.groups = function () {
        if ($scope.user) {
          return _.foldl($scope.user.groups, function (memo, group) {
            return memo + (memo ? ', ' : '') + group.name;
          }, '');
        }
      };
    });
