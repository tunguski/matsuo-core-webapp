'use strict';

var toastr = {
  success: function () {},
  error: function () {}
};

describe('Controllers: User', function () {
  // load the controller's module
  beforeEach(module('mt.webapp'));

  var scope, ctrl, http;

  beforeEach(inject(function ($httpBackend) {
    http = $httpBackend;
  }));

  describe('Controller: UserListController', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('UserListController', {
        $scope: scope
      });
    }));

    it('groups', function () {
      expect(scope.groups({ groups: [{ name: 'one'}, { name: 'two'}]})).toBe('one, two');
    });

    it('addUser', function () {
      scope.addUser({});
      expect().toBe();
    });

    it('blockUser', function () {
      http.expectGET('/api/users').respond('[{}]');
      scope.$digest();
      http.flush();

      http.expectPUT('/api/users/blockUser').respond('[{}]');

      scope.blockUser({});

      scope.$digest();
      http.flush();

      expect().toBe();
    });
  });


  function testSaveOrUpdate(isNew) {
    it(isNew ? 'save' : 'update', function () {
      scope.entity = {
        isNew: function () {
          return isNew;
        },
        $save: function (obj, successFn) { successFn(); },
        $update: function (obj, successFn) { successFn(); }
      };
      scope.save();

      scope.$digest();

      expect().toBe();
    });
  }


  describe('Controller: AddUserController', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('AddUserController', {
        $scope: scope,
        $modalInstance: {
          close: function () {}
        }
      });
    }));

    testSaveOrUpdate(true);
    testSaveOrUpdate(false);
  });


  describe('Controller: EditUserController', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('EditUserController', {
        $scope: scope,
        $modalInstance: {
          close: function () {},
          values: {
            user: {}
          }
        }
      });
    }));

    testSaveOrUpdate(true);
    testSaveOrUpdate(false);
  });


  describe('Service: abstractChangePasswordController', function () {

    var abstractChangePasswordController;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _abstractChangePasswordController_) {
      scope = $rootScope.$new();
      abstractChangePasswordController = _abstractChangePasswordController_;
    }));

    var $modalInstance = {
      close: function () {},
      values: {
        user: {
          id: 1
        }
      }
    };

    it('save', function () {
      // $scope, $modalInstance, url
      abstractChangePasswordController(scope, $modalInstance, '/api/test');
      http.expectPUT('/api/test').respond('OK');
      scope.entity = { password: 'testPass' };
      scope.confirmationPassword = 'testPass';
      scope.save();
      http.flush();
      expect().toBe();
    });

    it('save incorrect', function () {
      // $scope, $modalInstance, url
      abstractChangePasswordController(scope, $modalInstance, '/api/test');
      scope.entity = { password: 'testPass' };
      scope.confirmationPassword = 'testPass2';

      spyOn(toastr, 'error');

      scope.save();

      http.verifyNoOutstandingRequest();
      expect(toastr.error).toHaveBeenCalledWith('Has\u0142o zosta\u0142o b\u0142\u0119dnie powt\xF3rzone');
    });

    it('close', function () {
      // $scope, $modalInstance, url
      abstractChangePasswordController(scope, $modalInstance, '/api/test');

      scope.close();

      http.verifyNoOutstandingRequest();

      expect().toBe();
    });
  });


  describe('Controller: ChangePasswordController', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('ChangePasswordController', {
        $scope: scope,
        $modalInstance: {}
      });
    }));

    it('', function () {
      // test creation
      expect().toBe();
    });
  });


  describe('Controller: ChangeOwnPasswordController', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('ChangeOwnPasswordController', {
        $scope: scope,
        $modalInstance: {}
      });
    }));

    it('', function () {
      // test creation
      expect().toBe();
    });
  });
});
