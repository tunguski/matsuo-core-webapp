'use strict';

/**
 * @ngdoc function
 * @name mt.webapp.controller:OrganizationUnitsController
 * @description
 * # OrganizationUnitsController
 * Controller of the mt.webapp
 */
angular.module('mt.webapp')
    .controller('OrganizationUnitsController', function ($scope, $http, $dialog, OrganizationUnit) {
      $scope.setTitle("Firmy");


      $scope.organizationUnitsWatchers = [];


      searchQueryFunction($scope, OrganizationUnit, { listField: 'organizationUnits' ,
        afterLoadFn: function (organizationUnits) {
          $http.get('/api/serviceAgreements/list/byIdOrganizationUnits', { params: { ids: _.pluck(organizationUnits, 'id') } }).success(
              function (serviceAgreements) {
                angular.forEach(serviceAgreements, function (serviceAgreement) {
                  _.findWhere(organizationUnits, { id: serviceAgreement.idPayer }).serviceAgreement = serviceAgreement;
                });
              });
        }});


      $scope.addOrganizationUnit = function() {
        $dialog.dialog({
          templateUrl:  'organization/add_company.html',
          controller: 'AddOrganizationUnitController',
          updated: $scope.updated
        }, function(result) {
          if(result === 'OK') {
            toastr.success("Dodano firmę");
            $scope.refresh();
          }
        });
      };
    })


    /**
     * @ngdoc function
     * @name mt.webapp.controller:AddOrganizationUnitController
     * @description
     * # AddOrganizationUnitController
     * Controller of the mt.webapp
     */
    .controller('AddOrganizationUnitController', function ($scope, $dialog, $modalInstance, OrganizationUnit) {
      $scope.entity = new OrganizationUnit();

      $dialog.saveAndCancelFn($scope, $modalInstance);
    });
