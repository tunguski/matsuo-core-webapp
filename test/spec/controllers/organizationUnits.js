'use strict';


describe('Controller: ', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var OrganizationUnitsCtrl,
    scope, http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    http = $httpBackend;
    OrganizationUnitsCtrl = $controller('OrganizationUnitsCtrl', {
      $scope: scope
    });
  }));

  it('addOrganizationUnit', function () {
    http.expectGET('/api/organizationUnits').respond([]);
    http.expectGET('views/organization/add_company.html').respond('<div></div>');
    http.expectGET('/api/organizationUnits').respond([]);

    var modal = scope.addOrganizationUnit();

    http.flush();

    modal.close('OK');

    // refresh()
    http.expectGET('/api/organizationUnits').respond([]);

    scope.$digest();
  });
});
