'use strict';

angular.module('app', ['ui.router', 'app.dashboard', 'app.services', 'app.controller','chartjs'])

angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          '': { templateUrl: './templates/main/main.html', controller: 'appController' },
          'dashboard@home': { templateUrl: './templates/dashboard/dashboard.html', controller: 'DahsboardController' },
          'news@home': { templateUrl: './templates/news/news.html'}
        }
      });

    $urlRouterProvider.otherwise('/');
  }]);

angular.module('app.controller', [])
  .controller('appController', ['$scope', '$state', function($scope, $state) {

    $scope.currentView = 'dashboard';

    $scope.templates = {
      header: 'templates/main/header.html',
      aside: 'templates/main/aside.html'
    };

    $scope.changeView = function(view) {
      $scope.currentView = view;
      // $state.transitionTo('home', {}, { reload: true });
    };

  }]);
