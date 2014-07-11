'use strict';


describe('Controller: ', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var WebPanelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WebPanelCtrl = $controller('WebPanelCtrl', {
      $scope: scope
    });
  }));

  it('', function () {
    expect().toBe();
  });
});
