'use strict';


describe('Controller: ', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var AccessLogListCtrl,
    scope,
    http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    http = $httpBackend;
    AccessLogListCtrl = $controller('AccessLogListCtrl', { $scope: scope });
  }));

  it('refresh', function () {

    http.expectGET('/api/accessLogs').respond([{ status: 'ok' }]);

    scope.$digest();
//    http.flush();
//
//    http.expectGET('/api/accessLogs').respond([{ status: 'ok' }]);
//
//    scope.refresh();
//
//    http.flush();
    http.verifyNoOutstandingRequest();
  });

  it('', function () {
    expect(scope.accessStatusStyle({ status: 'danger' })).toBe('accessLog-danger');
  });
});
