'use strict';


describe('Controller: ', function () {


  // load the controller's module
  beforeEach(module('mt.webapp'));


  var UserCtrl,
    http,
    scope;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    http = $httpBackend;
    UserCtrl = $controller('UserCtrl', {
      $scope: scope,
      $routeParams: {
        idEntity: 7
      }
    });
  }));


  it('loads user', function () {

    http.expectGET('/api/users/7').respond({ id: 7 });
    http.flush();

    http.verifyNoOutstandingRequest();

    expect(scope.user.id).toBe(7);
  });
});

