'use strict';


describe('Directive: flotChart', function () {

  // load the controller's module
  beforeEach(module('mt.webapp'));

  var scope, $compile, $timeout;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$compile_, _$timeout_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
    $timeout = _$timeout_;
  }));


  it('', function () {
    scope.stat = {
        flotOptions: {
          series: {
            lines: { show: true },
            points: { show: true }
          }
        },
        flotData: [[ [0, 1], [1, 5], [2, 23] ]]
    };

    var template = $compile(
        '<div style="width: 100px; height: 100px" flot-chart="stat.flotOptions" ng-model="stat.flotData"></div>')(scope);

    scope.$digest();
    $timeout.flush();

    scope.flotData = [[ [0, 1], [1, 5], [2, 23], [3, 1], [4, 57], [5, 2] ]];

    scope.$digest();

    var templateAsHtml = template.html();

    expect(templateAsHtml).toContain('<canvas');
  });
});
