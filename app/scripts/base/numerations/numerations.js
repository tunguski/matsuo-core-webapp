
function NumerationsController($scope, $routeParams, $http, Numeration) {

  $scope.setTitle("Lista numeracji");

  Numeration.query({}, scopeSetter($scope, 'numerations'));
}

