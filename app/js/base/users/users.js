restFactory('User', {
  additionalFunctions: {
    changePassword: {
      method: 'put',
      url: '/changePassword?actualPassword=:actualPassword&newPassword=:newPassword&confirmationPassword=:confirmationPassword&id=:id'
    },
    changeOwnPassword: {
      method: 'put',
      url: '/changeOwnPassword?actualPassword=:actualPassword&newPassword=:newPassword&confirmationPassword=:confirmationPassword'
    }
  }
});


function UserListController($scope, $http, $dialog, User) {
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
    }
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
}


function AddUserController($scope, $dialog, $modalInstance, User) {
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
}


function EditUserController($scope, $dialog, $modalInstance) {
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
}


function abstractChangePasswordController($scope, $http, validationService, $modalInstance, url) {
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
}


function ChangePasswordController($scope, $http, validationService, $modalInstance) {
  abstractChangePasswordController($scope, $http, validationService, $modalInstance, '/api/users/changePassword');
}


function ChangeOwnPasswordController($scope, $http, validationService, $modalInstance) {
  abstractChangePasswordController($scope, $http, validationService, $modalInstance, '/api/users/changeOwnPassword');
}

