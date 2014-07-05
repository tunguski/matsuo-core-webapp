'use strict';

angular.module('mt.webapp', ['mt.ui'])
    .config(function (mtRouteConfig) {
      mtRouteConfig.apiRedirects.api = 'http://localhost:8080';
    })
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
          { title: 'Płatnicy', href: '#/organization/companies' },
          { title: 'Numeracje', href: '#/numerations/numerations' },
          { title: 'Kasy', href: '#/cash/cashRegisters' }
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

