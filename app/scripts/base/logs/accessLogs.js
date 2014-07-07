'use strict';

/**
 * @ngdoc function
 * @name mt.webapp.controller:AccessLogListController
 * @description
 * # AccessLogListController
 * Controller of the mt.webapp
 */
angular.module('mt.webapp')
    .controller('AccessLogListController', function ($scope, AccessLog, User) {
      $scope.setTitle("Logi dostępu");

      $scope.refresh = function () {
        loadAndInject($scope.accessLogs, User, "user", "id");
      }

      searchQueryFunction($scope, AccessLog, {
        afterLoadFn: function (accessLogs) {
          $scope.accessLogs = accessLogs;
          loadAndInject($scope.accessLogs, User, "user", "id");
        }
      });

      $scope.accessStatusStyle = function (accessLog) {
          return "accessLog-" + accessLog.status;
      }
    });

