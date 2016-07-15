'use strict';

angular.module('app', ['ui.router','app.dashboard','app.services', 'chartjs'])

angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          '': { templateUrl: './templates/main/main.html' },
          'dashboard@home': { templateUrl: './templates/dashboard/dashboard.html', controller: 'DahsboardController' }
        }
      });

    $urlRouterProvider.otherwise('/');
  }]);