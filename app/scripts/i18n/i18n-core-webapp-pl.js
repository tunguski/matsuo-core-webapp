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
          fullName: 'Pełna nazwa',
          shortName: 'Nazwa skrócona',
          code: 'Kod',
          nip: 'Nip',
          username: 'Login',
          password: 'Hasło',
          priority: 'Priorytet',
          idParty: 'Podmiot',
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
        },

        menu: {
          searchPlaceholder: 'Wyszukaj'
        },

        enum: {
          NotePriority: {
            IMPORTANT: 'Ważna',
            WARNING: 'Ostrzeżenie',
            INFO: 'Informacja'
          },

          NoteStatus:{
            OPEN: 'Otwarta',
            CANCELLED: 'Anulowana',
            CLOSED: 'Zamknięta'
          }
        }

      });
    });
