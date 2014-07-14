'use strict';

/**
 * @ngdoc function
 * @name mt.webapp.controller:AccessLogListCtrl
 * @description
 * # AccessLogListCtrl
 * Controller of the mt.webapp
 */
angular.module('mt.webapp')
    .controller('AccessLogListCtrl', function ($scope, AccessLog, User) {
      $scope.setTitle("Logi dostępu");

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

