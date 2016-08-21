(function () {
  'use strict';
  angular
    .module('Playlistr', [
      'ngMaterial',
      'Playlistr.TrackService',
      'Playlistr.Search',
      'Playlistr.TrackList',
    ])
    .run(function($rootScope) {
      $rootScope.tracks = [];
    })
})()


