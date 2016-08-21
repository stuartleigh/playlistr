(function () {
  'use strict';
  angular
    .module('Playlistr', [
      'ngMaterial',
      'Playlistr.Search',
      'Playlistr.TrackList',
    ])
    .run(function($rootScope) {
      $rootScope.tracks = [];
    })
})()


