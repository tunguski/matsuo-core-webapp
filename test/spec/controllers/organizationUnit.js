'use strict';

var toastr = {
  success: function (msg) {
    console.log(msg);
  },
  info: function (msg) {
    console.log(msg);
  }
};

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
      ctrl = $controller('OrganizationUnitInfoCtrl', {
        $scope: scope,
        $routeParams: {
          idEntity: 7
        }
      });
    }));

    it('removeEmployee', function () {
      $http.expectGET('/api/organizationUnits/7').respond('{ "id": 7 }');
      $http.expectGET('/api/organizationUnits/7/employees').respond('[]');

      $http.flush();

      $http.expectDELETE('/api/organizationUnits/7/employee/11').respond('');
      $http.expectGET('/api/organizationUnits/7').respond('{ "id": 7 }');
      $http.expectGET('/api/organizationUnits/7/employees').respond('[]');

      spyOn(toastr, 'success');

      scope.removeEmployee({ id: 11 });

      $http.flush();

      $http.verifyNoOutstandingRequest();
      expect(toastr.success).toHaveBeenCalledWith('Usunięto pracownika');
    });

    it('editCompany', function () {
      $http.expectGET('/api/organizationUnits/7').respond('{ "id": 7 }');
      $http.expectGET('/api/organizationUnits/7/employees').respond('[]');

      $http.flush();

      $http.expectGET('views/organization/add_company.html').respond('<div></div>');

      var modal = scope.editCompany();

      $http.flush();

      spyOn(toastr, 'success');

      modal.close('OK');

      $http.expectGET('/api/organizationUnits/7').respond('{ "id": 7 }');
      $http.expectGET('/api/organizationUnits/7/employees').respond('[]');

      $http.flush();

      $http.verifyNoOutstandingRequest();
      expect(toastr.success).toHaveBeenCalledWith('Zapisano zmiany danych firmy');
    });

    it('addEmployee', function () {
      $http.expectGET('/api/organizationUnits/7').respond('{ "id": 7 }');
      $http.expectGET('/api/organizationUnits/7/employees').respond('[]');

      $http.flush();

      $http.expectGET('organization/add_employee.html').respond('<div></div>');

      var modal = scope.addEmployee();

      $http.flush();

      modal.close({
        result: 'OK',
        entity: {
          id: 11
        }
      });

      $http.expectPOST('/api/organizationUnits/7/employee/11').respond('');
      $http.expectGET('/api/organizationUnits/7').respond('{ "id": 7 }');
      $http.expectGET('/api/organizationUnits/7/employees').respond('[]');

      scope.$digest();
      $http.flush();
    });
  });

  describe('AddEmployeeCtrl', function () {
    var $modalInstance = {
      close: function () {}
    };
    beforeEach(inject(function ($controller) {
      ctrl = $controller('AddEmployeeCtrl', {$scope: scope, $modalInstance: $modalInstance});
    }));

    it('save new employee', function () {
      scope.entity = {
        id: 11
      };
      scope.save();
    });

    it('save existing employee', function () {
      scope.entity = {
        $save: function (fn) { fn({}, function () { return '/fasfada/13' }); }
      };

      $http.expectGET('/api/persons/13').respond('{ "id": 13 }');

      scope.save();

      $http.flush();

      $http.verifyNoOutstandingRequest();
    });
  });
});
