(function () {
  "use strict"

  angular
    .module('moment-module', [])
    .factory('moment', ['$window', function ($window) {
        return $window.moment;
    }]);

})()
