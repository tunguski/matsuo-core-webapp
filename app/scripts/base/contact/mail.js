'use strict';

/**
 * @ngdoc function
 * @name mt.webapp.controller:MailCtrl
 * @description
 * # MailCtrl
 * Controller of the mt.webapp
 */
angular.module('mt.webapp')
    .controller('MailCtrl', function ($scope, $http, $timeout, validationService,  MailMessage) {


      $scope.setTitle("Wyślij maila");


      $scope.entity = new MailMessage();
      $scope.mails = [];
      $scope.listPerson = [];


      $scope.idParty = {
        options: {
          url: '/api/persons',
          formatElement: personFormatResult,
          bindId: true
        }
      };


      $scope.tinymceOptions = {
        selector: 'textarea',
        menubar: false,
        toolbar: "undo redo | formatselect fontsizeselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        height: 400
      };


      $scope.save = function () {
        $scope.entity.$save(function (entity, headers) {
          toastr.success('Wysłano wiadomość');
        }, validationService($scope));
        $scope.entity = new MailMessage();
        $scope.idParty.value = null;
      };


      $scope.addPerson = function () {
        if ($scope.idParty.value != null) {
          $scope.listPerson.push($scope.idParty.value);
          $scope.idParty.value = null;
        }
      };
    });

