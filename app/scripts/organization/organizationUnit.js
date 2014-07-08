'use strict';

angular.module('mt.webapp')
    .value('organizationUnitTabs', [
      { title: 'Pracownicy', src: '/views/organization/tabs/employees.html'},
      { title: 'Wiadomości', src: '/views/organization/tabs/messages.html'},
      { title: 'Projekty', src: '/views/organization/tabs/projects.html'},
    ])

    /**
     * @ngdoc function
     * @name mt.webapp.controller:OrganizationUnitInfoCtrl
     * @description
     * # OrganizationUnitInfoCtrl
     * Controller of the mt.webapp
     */
    .controller('OrganizationUnitInfoCtrl', function ($scope, $routeParams, $http, $dialog, organizationUnitTabs,
        OrganizationUnit) {
      $scope.setTitle('<span><span class="comment">Firma</span> "{{entity.fullName}}"</span>', $scope);
      $scope.tabs = organizationUnitTabs;

      $scope.refresh = function() {
        OrganizationUnit.get({ idOrganizationUnit: $routeParams.idEntity }, function (organizationUnit) {
          $scope.entity = organizationUnit;

          $http.get('/api/organizationUnits/' + $routeParams.idEntity + '/employees').success(function (employees) {
            $scope.employees = employees;
          });
        });
      };
      $scope.refresh();

      $scope.addEmployee = function() {
        $dialog.dialog({
          templateUrl:  'organization/add_employee.html',
          controller: 'AddEmployeeCtrl',
          updated: $scope.updated
        }, function(result) {
          if(result.result === 'OK') {
            $http.post('/api/organizationUnits/' + $scope.entity.id + '/employee/' + result.entity.id).success(
              function (entity) {
                toastr.success('Dodano pracownika');
                $scope.refresh();
              });
          }
        });
      };

      $scope.removeEmployee = function(employee) {
        $http['delete']('/api/organizationUnits/' + $scope.entity.id + '/employee/' + employee.id).success(
            function (entity) {
              toastr.success('Usunięto pracownika');
              $scope.refresh();
            });
      };
    })


    /**
     * @ngdoc function
     * @name mt.webapp.controller:AddEmployeeCtrl
     * @description
     * # AddEmployeeCtrl
     * Controller of the mt.webapp
     */
    .controller('AddEmployeeCtrl', function ($scope, $modalInstance, Person) {
      $scope.entity = new Person();

      $scope.close = $modalInstance.close;

      $scope.save = function() {
        if ($scope.entity.id) {
          $modalInstance.close({ result: 'OK', entity: $scope.entity });
        } else {
          $scope.entity.$save(function (entity, headers) {
            var id = lastUrlElement(headers);
            Person.get({ idPerson: id}, function (person) {
              $modalInstance.close({ result: 'OK', entity: person });
            });
          });
        }
      };

      initializeSelect2($scope, 'entity.idPerson', '/api/persons', 'person', { bindEntity: 'entity' });
    })

    /**
     * @ngdoc function
     * @name mt.webapp.controller:OrganizationUnitInfoEmployeesTabCtrl
     * @description
     * # OrganizationUnitInfoEmployeesTabCtrl
     * Controller of the mt.webapp
     */
    .controller('OrganizationUnitInfoEmployeesTabCtrl', function ($scope) {

    })

    /**
     * @ngdoc function
     * @name mt.webapp.controller:OrganizationUnitInfoMessagesTabCtrl
     * @description
     * # OrganizationUnitInfoMessagesTabCtrl
     * Controller of the mt.webapp
     */
    .controller('OrganizationUnitInfoMessagesTabCtrl', function ($scope) {

    })

    /**
     * @ngdoc function
     * @name mt.webapp.controller:OrganizationUnitInfoProjectsTabCtrl
     * @description
     * # OrganizationUnitInfoProjectsTabCtrl
     * Controller of the mt.webapp
     */
    .controller('OrganizationUnitInfoProjectsTabCtrl', function ($scope) {

    })
;

