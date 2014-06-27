'use strict';

angular.module('mt.webapp', ['mt.ui'])
    .config(function (restFactoryProvider) {
      restFactoryProvider
          .define('MailMessage')
          .define('SmsMessage')
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

