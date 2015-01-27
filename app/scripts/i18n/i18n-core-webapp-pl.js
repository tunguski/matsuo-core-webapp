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
          fullName: 'Full name',
          shortName: 'Short name',
          code: 'Code',
          nip: 'ID number',
          username: 'Login',
          password: 'Hasło',
          person: {
            firstName: 'Imię',
            lastName: 'Nazwisko',
            pesel: 'Pesel'
          }
        },
        address: {
          town: 'Miasto',
          street: 'Ulica',
          zipCode: 'Kod pocztowy',
          gmina: 'Gmina',
          houseNumber: 'Nr domu',
          apartmentNumber: 'Nr lokalu'
        }

      });
    });
