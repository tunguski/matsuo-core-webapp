'use strict';


describe('Controller: ', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var OrganizationUnitsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationUnitsCtrl = $controller('OrganizationUnitsCtrl', {
      $scope: scope
    });
  }));

  it('', function () {
    expect().toBe();
  });
});
