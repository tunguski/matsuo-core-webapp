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

      $scope.flotChartData = [[
        [0, 1], [1, 5], [2, 23],
        [3, 1], [4, 57], [5, 2]
      ]];
      $scope.optionsForFlot = {
        series: {
          lines: { show: true },
          points: { show: true }
        }
      };

      $scope.flotChartData2 = [[ ['January', 10], ['February', 8], ['March', 4], ['April', 13], ['May', 17], ['June', 9] ]];
      $scope.optionsForFlot2 = {
        series: {
          bars: {
            show: true,
            barWidth: 0.6,
            align: 'center'
          }
        },
        xaxis: {
          mode: 'categories',
          tickLength: 0
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
