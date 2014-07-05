'use strict';


describe('Controller: ', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var SmsController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SmsController = $controller('SmsController', {
      $scope: scope
    });
  }));

  it('', function () {
    expect().toBe();
  });
});
