'use strict';

/**
 * @ngdoc function
 * @name mt.ui.controller:UserListController
 * @description
 * # UserListController
 * Controller of the mt.ui
 */
angular.module('mt.webapp')
    .controller('UserListController', function UserListController($scope, $http, $dialog, User) {
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
          $dialog.dialog({
            templateUrl:  templateUrl,
            controller: controller,
            user: user
          }, function() { $scope.refreshListing(); });
        };
      }

      $scope.addUser = openUserDialog('/views/management/modal/addUser.html', 'AddUserController');
      $scope.editUser = openUserDialog('/views/management/modal/editUser.html', 'EditUserController');
      $scope.changePassword = openUserDialog('/views/management/modal/changePassword.html', 'ChangePasswordController');
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
     * @name mt.ui.controller:AddUserController
     * @description
     * # AddUserController
     * Controller of the mt.ui
     */
    .controller('AddUserController', function AddUserController($scope, $dialog, $modalInstance, User) {
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
     * @name mt.ui.controller:EditUserController
     * @description
     * # EditUserController
     * Controller of the mt.ui
     */
    .controller('EditUserController', function ($scope, $dialog, $modalInstance) {
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
     * @name mt.ui.service:abstractChangePasswordController
     * @description
     * # abstractChangePasswordController
     * Service of the mt.ui
     */
    .service('abstractChangePasswordController', function ($http, validationService) {
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
     * @name mt.ui.controller:ChangePasswordController
     * @description
     * # ChangePasswordController
     * Controller of the mt.ui
     */
    .controller('ChangePasswordController', function ($scope, $http, validationService, $modalInstance,
                                                      abstractChangePasswordController) {
      abstractChangePasswordController($scope, $modalInstance, '/api/users/changePassword');
    })
    /**
     * @ngdoc function
     * @name mt.ui.controller:ChangeOwnPasswordController
     * @description
     * # ChangeOwnPasswordController
     * Controller of the mt.ui
     */
    .controller('ChangeOwnPasswordController', function ($scope, $http, validationService, $modalInstance,
                                                         abstractChangePasswordController) {
      abstractChangePasswordController($scope, $modalInstance, '/api/users/changeOwnPassword');
    });

