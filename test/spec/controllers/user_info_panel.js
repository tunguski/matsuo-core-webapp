'use strict';


describe('Controller: UserInfoPanelController', function () {

  angular.module('mt.webapp')
      .config(function (mtRouteConfig) {
        delete mtRouteConfig.apiRedirects.api;
      });

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var UserInfoPanelController,
    rootScope,
    scope,
    http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    http = $httpBackend;
    rootScope = $rootScope;
    UserInfoPanelController = $controller('UserInfoPanelController', {
      $scope: scope
    });
  }));

  it('groups', function () {
    scope.user = {
      groups: [
        {
          name: 'one'
        }, {
          name: 'two'
        }
      ]
    };
    expect(scope.groups()).toBe('one, two');
  });

  it('loadLoginTime', function () {
    expect(scope.loginTime).not.toBeDefined();

    http.expectGET('/api/login/loginTime').respond('1393822800000');
    scope.$digest();
    http.flush();

    expect(scope.loginTime).toBeDefined();
  });

  it('loggedIn event', function () {
    http.expectGET('/api/login/loginTime').respond('1393822800000');
    scope.$digest();
    http.flush();

    http.expectGET('/api/login/loginTime').respond('1393822800000');
    rootScope.$emit('loggedIn');
    scope.$digest();
    http.flush();
  });

  it('groups', function () {
    scope.user = {
      groups: [
        {
          name: 'one'
        }, {
          name: 'two'
        }
      ]
    };
    expect(scope.groups()).toBe('one, two');
  });
});
