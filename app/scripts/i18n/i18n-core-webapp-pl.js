'use strict';

angular.module('mt.webapp')
    .config(function($translateProvider) {
      // polish translation
      $translateProvider.translations('pl', {

        dialog: {
          addUser: {
            newUserText: 'Nowy użytkownik'
          }
        },

        entity: {
          username: 'Login',
          password: 'Hasło',
          person: {
            firstName: 'Imię',
            lastName: 'Nazwisko',
            pesel: 'Pesel',
            address: {
              town: 'Miasto',
              street: 'Ulica'
            }
          }
        }

      });
    });
