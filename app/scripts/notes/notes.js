

angular.module('mt.webapp')
  .controller('NoteListController', function ($scope, $http, $dialog, Person, NoteMessage, SmsMessage, MailMessage) {
    $scope.messages = [];
    $scope.entity = {};

    $scope.loadNotes = function (idPerson) {
      $scope.messages.length = 0;

      function addMessages(data) {
        $scope.messages.pushArray(data);
        loadAndInject(data, Person, 'party', 'id');
      }

      NoteMessage.query({ idParty : idPerson }, addMessages);
      SmsMessage.query({ idParty : idPerson }, addMessages);
      MailMessage.query({ idParty : idPerson }, addMessages);
    };


    if ($scope.idMainEntity) {
      $scope.entity.idEntity = $scope.idMainEntity;
      $scope.$watch ('party', function (n, o) {
        if (n) {
          $scope.loadNotes(n.id);
        }
      });
    } else {
      $scope.setTitle('Lista dodanych notatek');
      $scope.loadNotes();
    }


    $scope.changeStatus = function (status) {
      return function (id) {
        $http.post('/api/notes/' + id + '/' + status).success(function(data) {
          $scope.loadNotes();
        });
      };
    };


    $scope.open = $scope.changeStatus('open');
    $scope.close = $scope.changeStatus('close');
    $scope.cancel = $scope.changeStatus('cancel');


    $scope.addNote = function(note) {
      $dialog.dialog({
        templateUrl:  '/views/notes/new_note.html',
        controller: 'NewNoteController',
        note: note,
        party: $scope.party
      }, function(result) {
        if(result === 'OK') {
          toastr.success('Dodano notatkę');
          $scope.loadNotes();
        }
      });
    };
    $scope.entity.showParty = !$scope.idMainEntity;
  })


  .controller('NewNoteController', function ($scope, $location, $dialog, $modalInstance, NoteMessage) {

    $scope.person = {};

    $dialog.saveAndCancelFn($scope, $modalInstance);

    $scope.idParty = {
      options: {
        url: '/api/persons',
        formatElement: partyFormatResult,
        bindId: 'entity.idParty'
      }
    };

    if ($modalInstance.values.note) {
      $scope.entity = $modalInstance.values.note;
    } else {
      $scope.entity = new NoteMessage();
    }

    if ($modalInstance.values.party) {
      $scope.idParty.value = $modalInstance.values.party;
      $scope.entity.idParty = $modalInstance.values.party.id;
      $scope.idParty.options.disabled = true;
    }
  });

