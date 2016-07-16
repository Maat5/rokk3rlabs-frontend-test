'use strict';

/* Controllers */

angular.module('app.dashboard', [])
  .controller('DahsboardController', ['$scope', 'lodash', 'consumeData',
    function($scope, _, consumeData) {

      $scope.consumeData = [];

      $scope.loaded = false;
      $scope.backColors = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ];
      $scope.borderColor = [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ];

      $scope.initDashboard = function() {
        consumeData().then(function(res) {
          $scope.consumeData = res.data;
          $scope.initSZones(res.data, false);

          setInterval(function(){
            $scope.initSZones(res.data, true);
          }, 10000);
        });
      };


      $scope.initSZones = function(data, shuffle) {
        var counts = [];
        var speed = [];
        var avg = [];
        var labels = [];

        _.forEach(data, function(data) {
          labels.push(data.zoneId);
          counts.push(data.data.count);
          speed.push(data.data.count);
          avg.push(data.data.time);
        });

        if(shuffle){
          counts = _.shuffle(counts);
          speed = _.shuffle(speed);
          avg = _.shuffle(avg);
        }

        $scope.countData(counts, labels);
        $scope.speedtData(speed, labels);
        $scope.avgData(avg, labels);

        $scope.loaded = true;
      };

      $scope.countData = function(data, labels) {
        $scope.dataCount = {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              label: 'Zone',
              backgroundColor: $scope.backColors,
              borderColor: $scope.borderColor,
              borderWidth: 1
            }]
          }
        };

        var ctx = document.getElementById("countChart").getContext("2d");
        var myChart = new Chart(ctx, $scope.dataCount)
      };

      $scope.speedtData = function(data, labels) {
        $scope.dataSpeed = {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              label: 'Zone',
              backgroundColor: _.head($scope.backColors),
              borderColor: _.head($scope.borderColor),
              borderWidth: 1
            }]
          }
        };

        var ctx = document.getElementById("speedChart").getContext("2d");
        var myChart = new Chart(ctx, $scope.dataSpeed)
      };

      $scope.avgData = function(data, labels) {
        $scope.dataSpeed = {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              label: 'Zone',
              backgroundColor: $scope.backColors,
              borderColor: $scope.borderColor,
              borderWidth: 1
            }]
          }
        };

        var ctx = document.getElementById("avgChart").getContext("2d");
        var myChart = new Chart(ctx, $scope.dataSpeed)
      };

    }
  ]);
