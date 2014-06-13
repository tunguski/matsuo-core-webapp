

angular.module('mt.ui')
    .factory('userGroupConfiguration', ['$route', '$rootScope', '$location', 'mtRouteConfig',
      function($route, $rootScope, $location, mtRouteConfig) {

        var userGroupConfiguration = {
          refreshAppUserConfiguration: function () {
            var groups = _.pluck($rootScope.user.groups, 'name');
            if (_.contains(groups, 'ADMIN')) {
              mtRouteConfig.defaultRoute = '/admin/administration'
            } else {
              mtRouteConfig.defaultRoute = '/base/info'
            }

            $route.routes['null'] = mtRouteConfig.defaultRoute;
            $location.url(mtRouteConfig.defaultRoute);
          }
        };
        return userGroupConfiguration;
      }])
;
