'use strict';

/**
 * @ngdoc function
 * @name mt.webapp.controller:UserListCtrl
 * @description
 * # UserListCtrl
 * Controller of the mt.webapp
 */
angular.module('mt.webapp')
    .controller('UserListCtrl', function ($scope, $http, $dialog, User) {
      $scope.setTitle('Zarządzanie użytkownikami');

      $scope.refreshListing = function() {
        User.query({}, scopeSetter($scope, 'users'));
      };
      $scope.refreshListing();

      $scope.groups = function (user) {
        return _.pluck(user.groups, 'name').join(', ');
      };

      function openUserDialog(templateUrl, controller) {
        return function (user) {
          return $dialog.dialog({
            templateUrl:  templateUrl,
            controller: controller,
            user: user
          }, function() { $scope.refreshListing(); });
        };
      }

      $scope.addUser = openUserDialog('/views/management/modal/addUser.html', 'AddUserCtrl');
      $scope.editUser = openUserDialog('/views/management/modal/editUser.html', 'EditUserCtrl');
      $scope.changePassword = openUserDialog('/views/management/modal/changePassword.html', 'ChangePasswordCtrl');
      $scope.blockUser = function (user) {
        $http.put('/api/users/blockUser', {
          id: user.id,
          block: !user.blocked
        }).success(function () {
          user.blocked = !user.blocked;
          toastr.success('Zmieniono stan blokady');
        }).error(function () {
          toastr.error('Nieudana próba zmiany stanu blokady');
        });
      }
    })
    /**
     * @ngdoc function
     * @name mt.webapp.controller:AddUserCtrl
     * @description
     * # AddUserCtrl
     * Controller of the mt.webapp
     */
    .controller('AddUserCtrl', function ($scope, $dialog, $modalInstance, User) {
      $scope.entity = new User({
        person: {
          address: {}
        }
      });

      $dialog.saveAndCancelFn($scope, $modalInstance, {
        saveFn: function(entity, headers) {
          $modalInstance.close('OK');
          toastr.success('Dodano nowego użytkownika');
        },
        updateFn: function() {
          $modalInstance.close('OK');
          toastr.success('Uaktualniono dane użytkownika');
        }
      });
    })
    /**
     * @ngdoc function
     * @name mt.webapp.controller:EditUserCtrl
     * @description
     * # EditUserCtrl
     * Controller of the mt.webapp
     */
    .controller('EditUserCtrl', function ($scope, $dialog, $modalInstance) {
      $scope.entity = $modalInstance.values.user;

      $dialog.saveAndCancelFn($scope, $modalInstance, {
        saveFn: function(entity, headers) {
          $modalInstance.close('OK');
          toastr.success('Dodano nowego użytkownika');
        },
        updateFn: function() {
          $modalInstance.close('OK');
          toastr.success('Uaktualniono dane użytkownika');
        }
      });
    })
    /**
     * @ngdoc function
     * @name mt.webapp.service:abstractChangePasswordCtrl
     * @description
     * # abstractChangePasswordCtrl
     * Service of the mt.webapp
     */
    .service('abstractChangePasswordCtrl', function ($http, validationService) {
      return function ($scope, $modalInstance, url) {
        $scope.entity = {};

        $scope.save = function () {
          if ($scope.entity.password === $scope.confirmationPassword) {
            $scope.entity.id = $modalInstance.values.user.id;

            $http.put(url, $scope.entity)
                .success(function(entity, headers) {
                  $modalInstance.close('OK');
                  toastr.success('Zmieniono hasło');
                })
                .error(validationService($scope));
          } else {
            toastr.error('Hasło zostało błędnie powtórzone');
          }
        };
        $scope.close = function(result) { $modalInstance.close(result); };
      };
    })
    /**
     * @ngdoc function
     * @name mt.webapp.controller:ChangePasswordCtrl
     * @description
     * # ChangePasswordCtrl
     * Controller of the mt.webapp
     */
    .controller('ChangePasswordCtrl', function ($scope, $http, validationService, $modalInstance,
                                                      abstractChangePasswordCtrl) {
      abstractChangePasswordCtrl($scope, $modalInstance, '/api/users/changePassword');
    })
    /**
     * @ngdoc function
     * @name mt.webapp.controller:ChangeOwnPasswordCtrl
     * @description
     * # ChangeOwnPasswordCtrl
     * Controller of the mt.webapp
     */
    .controller('ChangeOwnPasswordCtrl', function ($scope, $http, validationService, $modalInstance,
                                                         abstractChangePasswordCtrl) {
      abstractChangePasswordCtrl($scope, $modalInstance, '/api/users/changeOwnPassword');
    });

