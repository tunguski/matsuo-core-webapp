'use strict';


describe('Directive: roundedBox', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var scope, $compile, $http;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$compile_, $httpBackend) {
    scope = $rootScope.$new();
    $compile = _$compile_;
    $http = $httpBackend;
  }));


  it('', function () {
    var template = $compile('<div rounded-icon-box></div>')(scope);

    $http.expectGET('/views/templates/roundedIconBox.html').respond('');

    scope.$digest();

    var templateAsHtml = template.html();

    expect(templateAsHtml).not.toContain('<canvas');
  });
});
