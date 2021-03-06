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
      OrganizationUnit.get({ idOrganizationUnit: $routeParams.idEntity }, $scope.scopeSetter('entity'));
    };
    $scope.refresh();

    $scope.addEmployee = function() {
      return $dialog.dialog({
        templateUrl:  'organization/add_employee.html',
        controller: 'AddEmployeeCtrl'
      }, function(result) {
        if (result.result === 'OK') {
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
          function () {
            toastr.success('Usunięto pracownika');
            $scope.refresh();
          });
    };

    $scope.editCompany = function() {
      return $dialog.dialog({
        templateUrl:  'views/organization/add_company.html',
        controller: 'AddOrganizationUnitCtrl',
        entity: $scope.entity
      }, function(result) {
        if (result === 'OK') {
          toastr.success('Zapisano zmiany danych firmy');
          $scope.refresh();
        }
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
          var id = _.lastUrlElement(headers);
          Person.get({ idPerson: id}, function (person) {
            $modalInstance.close({ result: 'OK', entity: person });
          });
        });
      }
    };

    $scope.idPerson = {
      options: {
        url: '/api/persons',
        //'person'
        bindEntity: 'entity'
      }
    };
  })

  /**
   * @ngdoc function
   * @name mt.webapp.controller:OrganizationUnitInfoEmployeesTabCtrl
   * @description
   * # OrganizationUnitInfoEmployeesTabCtrl
   * Controller of the mt.webapp
   */
  .controller('OrganizationUnitInfoEmployeesTabCtrl', function ($scope, $http) {
    $scope.$watchNotFalse('entity', function (entity) {
      $http.get('/api/organizationUnits/' + entity.id + '/employees').success($scope.scopeSetter('employees'));
    });
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

