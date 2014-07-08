'use strict';

angular.module('mt.webapp')
    .config(function(userGroupConfigurationProvider) {
      userGroupConfigurationProvider.groupToDefaultRoute.push({ groupName: '', defaultRoute: '/base/webappPanel'});
    })
;