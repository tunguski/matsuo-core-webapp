'use strict';


describe('Controller: ', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var MailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MailCtrl = $controller('MailCtrl', {
      $scope: scope
    });
  }));


  it('save', function () {

    scope.entity.$save = function (fn) {
      fn();
    };

    scope.save();
    expect().toBe();
  });


  it('addPerson', function () {
    scope.idParty = {
      value: {}
    };

    scope.addPerson();
    expect(scope.listPerson.length).toBe(1);
    expect(scope.idParty.value).toBe(null);
  });
});
