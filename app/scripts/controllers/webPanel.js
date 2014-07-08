'use strict';

/**
 * @ngdoc function
 * @name mt.webapp.controller:WebPanelCtrl
 * @description
 * # WebPanelCtrl
 * Controller of the mt.webapp
 */
angular.module('mt.webapp')
    .controller('WebPanelCtrl', function ($scope, $http, $dialog, OrganizationUnit) {
      $scope.setTitle('Panel testowy');

      $scope.flotChartData = [[[0, 1], [1, 5], [2, 2]]];
      $scope.optionsForFlot = {
        series: {
          lines: { show: true },
          points: { show: true }
        }
      };

      $scope.firstPercent = 32;
      $scope.firstOptions = {
        animate:{
          duration:1000,
          enabled:true
        },
        barColor:'#2C3E50',
        scaleColor:'#aaa',
        lineWidth:4,
        lineCap:'circle'
      };

      $scope.secondPercent = 44;
      $scope.secondOptions = {
        animate:{
          duration:1000,
          enabled:true
        },
        barColor:'#ef1e25',
        scaleColor:'#aaa',
        lineWidth:4,
        lineCap:'circle'
      };

      $scope.thirdPercent = 17;
      $scope.thirdOptions = {
        animate:{
          duration:1000,
          enabled:true
        },
        barColor:'#2C3E50',
        scaleColor:'#aaa',
        lineWidth:4,
        lineCap:'circle'
      };


    });