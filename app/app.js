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
          'dashboard@home': { templateUrl: './templates/dashboard/dashboard.html', controller: 'DahsboardController' },
          // 'profile@home': { templateUrl: './templates/profile/profile.tpl.html' },
          // 'skills@home': { templateUrl: './templates/skills/skills.tpl.html' },
          // 'experience@home': { templateUrl: './templates/experience/experience.tpl.html' },
          // 'me@home': { templateUrl: './templates/me/me.tpl.html' }
        }
      });

    $urlRouterProvider.otherwise('/');
  }]);