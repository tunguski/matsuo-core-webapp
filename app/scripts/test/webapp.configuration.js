'use strict';

angular.module('mt.webapp')
    .run(function($rootScope) {
      $rootScope.appName = 'Matsuo Core App';
    })
    .config(function(userGroupConfigurationProvider) {
      userGroupConfigurationProvider.groupToDefaultRoute.push({ groupName: '', defaultRoute: '/base/webappPanel'});
    })
;