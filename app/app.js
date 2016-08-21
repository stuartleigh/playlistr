(function () {
  'use strict';
  angular
    .module('Playlistr', [
      'ngMaterial',
      'moment-module',
      'Playlistr.TrackService',
      'Playlistr.TrackDirectives',
      'Playlistr.Search',
      'Playlistr.TrackList',
    ])
    .config(['$mdThemingProvider', function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .dark()
        .primaryPalette('pink')
        .accentPalette('orange');
    }])
})()
