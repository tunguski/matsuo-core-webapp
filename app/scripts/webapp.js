'use strict';

angular.module('mt.webapp', ['mt.ui', 'easypiechart'])
    .run(function (menuService) {
      menuService.menu.length = 0;
      menuService.menu.push({
        title: 'Zarządzanie',
        elements: [
          {
            title: 'Osoby',
            elements: [
              { title: 'Osoby fizyczne', href: '#/organization/persons' },
              { title: 'Użytkownicy systemu', href: '#/management/users' }
            ]
          },
          {
            title: 'Magazyny',
            elements: [
              { title: 'Magazyn', href: '#/storage/storage' }
            ]
          },
          { title: 'Firmy', href: '#/organization/organizationUnits' },
          { title: 'Numeracje', href: '#/numerations/numerations' }
        ]
      });
    })
    .config(function (restFactoryProvider) {
      restFactoryProvider
          .define('MailMessage')
          .define('SmsMessage', {
            additionalFunctions: {
              multiMessage: {
                method: 'post',
                url: '/multiMessage'
              }
            }
          })
          .define('AccessLog')
          .define('Numeration')
          .define('Payer')
          .define('Person')
          .define('Print')
          .define('OrganizationUnit')
          .define('User', {
            additionalFunctions: {
              changePassword: {
                method: 'put',
                    url: '/changePassword?actualPassword=:actualPassword&newPassword=:newPassword&confirmationPassword=:confirmationPassword&id=:id'
              },
              changeOwnPassword: {
                method: 'put',
                    url: '/changeOwnPassword?actualPassword=:actualPassword&newPassword=:newPassword&confirmationPassword=:confirmationPassword'
              }
            }
          });
    });

