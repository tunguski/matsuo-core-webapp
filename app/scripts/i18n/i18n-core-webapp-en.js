'use strict';

angular.module('mt.webapp')
    .config(function($translateProvider) {
      // english translation
      $translateProvider.translations('en', {

        dialog: {
          addUser: {
            newUserText: 'Add user'
          }
        },

        entity: {
          fullName: 'Full name',
          shortName: 'Short name',
          code: 'Code',
          nip: 'ID number',
          username: 'Login',
          password: 'Password',
          priority: 'Priority',
          idParty: 'Party',
          person: {
            firstName: 'First name',
            lastName: 'Last name',
            pesel: 'ID number'
          }
        },
        address: {
          town: 'Town',
          street: 'Street',
          zipCode: 'Zip code',
          gmina: 'Community',
          houseNumber: 'House number',
          apartmentNumber: 'Apartment number'
        },

        menu: {
          searchPlaceholder: 'Search'
        },

        enum: {
          NotePriority: {
            IMPORTANT: 'Important',
            WARNING: 'Warning',
            INFO: 'Information'
          },

          NoteStatus:{
            OPEN: 'Open',
            CANCELLED: 'Cancelled',
            CLOSED: 'Closed'
          }
        }

      });
    });
