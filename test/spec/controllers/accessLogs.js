'use strict';


describe('Controller: ', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var AccessLogListCtrl,
    scope,
    http,
    $timeout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, _$timeout_) {
    scope = $rootScope.$new();
    http = $httpBackend;
    $timeout = _$timeout_;
    AccessLogListCtrl = $controller('AccessLogListCtrl', { $scope: scope });
  }));


  it('loads logs', function () {

    http.expectGET('/api/accessLogs').respond([{ status: 'ok' }]);

    $timeout.flush();

    scope.$digest();
    http.flush();

    http.expectGET('/api/accessLogs').respond([{ status: 'ok' }]);

    http.verifyNoOutstandingRequest();
  });


  it('to set propert style', function () {
    expect(scope.accessStatusStyle({ status: 'danger' })).toBe('accessLog-danger');
  });
});
