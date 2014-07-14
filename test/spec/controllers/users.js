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

  describe('Controller: UserListCtrl', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('UserListCtrl', {
        $scope: scope
      });
    }));

    it('groups', function () {
      expect(scope.groups({ groups: [{ name: 'one'}, { name: 'two'}]})).toBe('one, two');
    });

    it('addUser', function () {
      http.expectGET('/api/users').respond('[{}]');
      http.expectGET('/views/management/modal/addUser.html').respond('<div></div>');

      var modal = scope.addUser({});

      http.flush();

      http.expectGET('/api/users').respond('[{}]');

      modal.close('OK');

      http.flush();
    });

    it('blockUser', function () {
      http.expectGET('/api/users').respond('[{}]');
      scope.$digest();
      http.flush();

      http.expectPUT('/api/users/blockUser').respond('[{}]');

      scope.blockUser({});

      http.flush();
      http.verifyNoOutstandingRequest();
    });

    it('blockUser error', function () {
      http.expectGET('/api/users').respond('[{}]');
      scope.$digest();
      http.flush();

      http.expectPUT('/api/users/blockUser').respond(401, 'error');

      spyOn(toastr, 'error');

      scope.blockUser({});

      http.flush();

      http.verifyNoOutstandingRequest();
      expect(toastr.error).toHaveBeenCalledWith('Nieudana próba zmiany stanu blokady');
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


  describe('Controller: AddUserCtrl', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('AddUserCtrl', {
        $scope: scope,
        $modalInstance: {
          close: function () {}
        }
      });
    }));

    testSaveOrUpdate(true);
    testSaveOrUpdate(false);
  });


  describe('Controller: EditUserCtrl', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('EditUserCtrl', {
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


  describe('Service: abstractChangePasswordCtrl', function () {

    var abstractChangePasswordCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _abstractChangePasswordCtrl_) {
      scope = $rootScope.$new();
      abstractChangePasswordCtrl = _abstractChangePasswordCtrl_;
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
      abstractChangePasswordCtrl(scope, $modalInstance, '/api/test');
      http.expectPUT('/api/test').respond('OK');
      scope.entity = { password: 'testPass' };
      scope.confirmationPassword = 'testPass';
      scope.save();
      http.flush();
      expect().toBe();
    });

    it('save incorrect', function () {
      // $scope, $modalInstance, url
      abstractChangePasswordCtrl(scope, $modalInstance, '/api/test');
      scope.entity = { password: 'testPass' };
      scope.confirmationPassword = 'testPass2';

      spyOn(toastr, 'error');

      scope.save();

      http.verifyNoOutstandingRequest();
      expect(toastr.error).toHaveBeenCalledWith('Has\u0142o zosta\u0142o b\u0142\u0119dnie powt\xF3rzone');
    });

    it('close', function () {
      // $scope, $modalInstance, url
      abstractChangePasswordCtrl(scope, $modalInstance, '/api/test');

      scope.close();

      http.verifyNoOutstandingRequest();

      expect().toBe();
    });
  });


  describe('Controller: ChangePasswordCtrl', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('ChangePasswordCtrl', {
        $scope: scope,
        $modalInstance: {}
      });
    }));

    it('', function () {
      // test creation
      expect().toBe();
    });
  });


  describe('Controller: ChangeOwnPasswordCtrl', function () {
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('ChangeOwnPasswordCtrl', {
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
