'use strict';


describe('Controller: ', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var ctrl, scope, $http, $controller;

  // Initialize a mock scope
  beforeEach(inject(function ($rootScope, _$httpBackend_, _$controller_) {
    scope = $rootScope.$new();
    $http = _$httpBackend_;
    $controller = _$controller_;
  }));

  describe('OrganizationUnitInfoCtrl', function () {
    // Initialize the controller
    beforeEach(inject(function ($controller) {
      ctrl = $controller('OrganizationUnitInfoCtrl', { $scope: scope });
    }));

    it('', function () {
      scope.entity = {
        id: 7
      };

      var modalInstance = scope.addEmployee();
      scope.removeEmployee({ id: 11 });

      expect().toBe();
    });
  });

  describe('AddEmployeeCtrl', function () {
    var $modalInstance = {
      close: function () {}
    };
    beforeEach(inject(function ($controller) {
      ctrl = $controller('AddEmployeeCtrl', {$scope: scope, $modalInstance: $modalInstance});
    }));

    it('save', function () {
    });
  });
});
