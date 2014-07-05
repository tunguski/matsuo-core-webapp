'use strict';

var toastr = {
  success: function () {}
};


describe('Controller: ', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var SmsController,
    scope,
    http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    http = $httpBackend;
    SmsController = $controller('SmsController', {
      $scope: scope
    });
  }));


  it('save', function () {
    scope.selectedParties = [];

    http.expectPOST('/api/smsMessages/multiMessage').respond('{}');
    scope.save();
    scope.$digest();
    http.flush();

    expect().toBe();
  });


  it('addPerson', function () {
    scope.idParty = {
      value: {}
    };

    scope.addPerson();
    expect(scope.parties.length).toBe(1);
    expect(scope.idParty.value).toBe(null);
  });
});
