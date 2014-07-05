'use strict';


describe('Controller: ', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var AccessLogListController,
    scope,
    http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    http = $httpBackend;
    AccessLogListController = $controller('AccessLogListController', {
      $scope: scope
    });
  }));

  it('refresh', function () {

    http.expectGET('/api/accessLogs').respond('[{ "status": "ok" }]');
    http.expectGET('/api/accessLogs').respond('[{ "status": "ok" }]');
    http.expectGET('/api/accessLogs').respond('[{ "status": "ok" }]');

    scope.refresh();

    scope.$digest();
    http.flush();

    expect().toBe();
  });

  it('', function () {
    expect(scope.accessStatusStyle({ status: 'danger' })).toBe('accessLog-danger');
  });
});
