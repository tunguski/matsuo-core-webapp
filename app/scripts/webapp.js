'use strict';

angular.module('mt.webapp', ['mt.ui', 'easypiechart', 'anvde'])
  .run(function (mtFormConfig) {
    mtFormConfig.namesMap.noteMessage = 'pl.matsuo.core.model.message.NoteMessage';
  })
  .config(function(uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
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
        { title: 'Firmy', href: '#/organization/organizationUnits' },
        { divider: true },
        { title: 'Schematy numeracji', href: '#/numerations/numerationSchemas' },
        { title: 'Numeracje', href: '#/numerations/numerations' }
      ]
    });
  })
  .config(function (restFactoryProvider) {
    restFactoryProvider
        .define('NoteMessage')
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
        .define('NumerationSchema')
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

