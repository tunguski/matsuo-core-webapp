'use strict';


describe('NoteListController: ', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var NoteListController,
    scope,
    http,
    $timeout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, _$timeout_) {
    scope = $rootScope.$new();
    http = $httpBackend;
    $timeout = _$timeout_;
    NoteListController = $controller('NoteListController', { $scope: scope });
  }));


  it('loads logs', function () {

    http.expectGET('/api/noteMessages').respond([{ status: 'ok' }]);
    http.expectGET('/api/smsMessages').respond([{ status: 'ok' }]);
    http.expectGET('/api/mailMessages').respond([{ status: 'ok' }]);

    $timeout.flush();

    scope.$digest();
    http.flush();

    scope.addNote();

    http.verifyNoOutstandingRequest();
  });
});


describe('NewNoteController: ', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var NewNoteController,
    scope,
    http,
    $timeout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, _$timeout_) {
    scope = $rootScope.$new();
    http = $httpBackend;
    $timeout = _$timeout_;
    NewNoteController = $controller('NewNoteController', {
      $scope: scope,
      $modalInstance: {
        values: {
          party: {
            id: 7
          }
        }
      }
    });
  }));


  it('loads logs', function () {

    scope.$digest();

    http.verifyNoOutstandingRequest();
  });
});
