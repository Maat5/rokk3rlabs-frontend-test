'use strict';


angular.module('app.services', [])
  .service('lodash', ['$window', function($window) {
    return $window._;
  }])
  .factory('consumeData', ['$http', function($http) {
    return function consumeData() {
      return $http.get('https://dl.dropboxusercontent.com/u/60115472/data.json');
    };
  }])
