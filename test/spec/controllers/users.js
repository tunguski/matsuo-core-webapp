'use strict';


describe('Controller: UserListController', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var UserListController,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserListController = $controller('UserListController', {
      $scope: scope
    });
  }));

  it('', function () {
    expect().toBe();
  });
});


describe('Controller: AddUserController', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var AddUserController,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddUserController = $controller('AddUserController', {
      $scope: scope,
      $modalInstance: {}
    });
  }));

  it('', function () {
    expect().toBe();
  });
});


describe('Controller: EditUserController', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var EditUserController,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditUserController = $controller('EditUserController', {
      $scope: scope,
      $modalInstance: {
        values: {
          user: {

          }
        }
      }
    });
  }));

  it('', function () {
    expect().toBe();
  });
});


describe('Service: abstractChangePasswordController', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var abstractChangePasswordController,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _abstractChangePasswordController_) {
    scope = $rootScope.$new();
    abstractChangePasswordController = _abstractChangePasswordController_;
  }));

  it('', function () {
    // $scope, $modalInstance, url
    abstractChangePasswordController(scope, {}, '/api/test');
    expect().toBe();
  });
});


describe('Controller: ChangePasswordController', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var ChangePasswordController,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChangePasswordController = $controller('ChangePasswordController', {
      $scope: scope,
      $modalInstance: {}
    });
  }));

  it('', function () {
    expect().toBe();
  });
});


describe('Controller: ChangeOwnPasswordController', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var ChangeOwnPasswordController,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChangeOwnPasswordController = $controller('ChangeOwnPasswordController', {
      $scope: scope,
      $modalInstance: {}
    });
  }));

  it('', function () {
    expect().toBe();
  });
});
