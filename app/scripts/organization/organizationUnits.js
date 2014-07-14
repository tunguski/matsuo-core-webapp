'use strict';

/**
 * @ngdoc function
 * @name mt.webapp.controller:OrganizationUnitsCtrl
 * @description
 * # OrganizationUnitsCtrl
 * Controller of the mt.webapp
 */
angular.module('mt.webapp')
    .controller('OrganizationUnitsCtrl', function ($scope, $http, $dialog, OrganizationUnit) {
      $scope.setTitle('Firmy');


      $scope.organizationUnitsWatchers = [];


      searchQueryFunction($scope, OrganizationUnit, { listField: 'organizationUnits' });


      $scope.addOrganizationUnit = function() {
        return $dialog.dialog({
          templateUrl:  'views/organization/add_company.html',
          controller: 'AddOrganizationUnitCtrl',
          updated: $scope.updated
        }, function(result) {
          if(result === 'OK') {
            toastr.success('Dodano firmę');
            $scope.refresh();
          }
        });
      };
    })


    /**
     * @ngdoc function
     * @name mt.webapp.controller:AddOrganizationUnitCtrl
     * @description
     * # AddOrganizationUnitCtrl
     * Ctrl of the mt.webapp
     */
    .controller('AddOrganizationUnitCtrl', function ($scope, $dialog, $modalInstance, OrganizationUnit) {
      $scope.entity = $modalInstance.values.entity ? $modalInstance.values.entity : new OrganizationUnit();

      $dialog.saveAndCancelFn($scope, $modalInstance);
    });
