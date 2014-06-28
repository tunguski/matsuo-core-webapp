
function SmsController($scope, $http, validationService, SmsMessage) {

  $scope.setTitle("Wyślij sms");
  $scope.entity = new SmsMessage();
  $scope.smses = [];
  $scope.parties = [];


  initializeSelect2($scope, "entity.idParty", "/api/party", "simpleParty", { bindId: true });


  $scope.save = function () {
    $http.post('/api/smsMessages/multiMessage', {
      message: $scope.entity,
      parties: $scope.parties
    }, function (entity, headers) {
      toastr.success('Wysłano wiadomość');
      $scope.entity = new SmsMessage();
      $scope.idParty.value = null;
      $scope.selectedParties.length = 0;
    }, validationService($scope));
  };


  $scope.addPerson = function () {
    if ($scope.idParty.value != null) {
      $scope.parties.push($scope.idParty.value);
      $scope.idParty.value = null;
    }
  };
}