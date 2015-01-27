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
          username: 'Login',
          password: 'Pasword',
          person: {
            firstName: 'First name',
            lastName: 'Last name',
            pesel: 'ID number',
            address: {
              town: 'Town',
              street: 'Street'
            }
          }
        }

      });
    });
