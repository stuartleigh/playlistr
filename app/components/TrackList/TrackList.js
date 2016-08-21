(function () {
  'use strict';
  angular
    .module('Playlistr.TrackList', [
      'ngMaterial',
    ])
    .controller('TrackListController', ['$rootScope', '$log', function TrackListController ($rootScope, $log) {
      var self = this
      self.tracks = $rootScope.tracks
      self.removeTrack = removeTrack

      function removeTrack (index) {
        self.tracks.splice(index, 1)
      }
    }])
})()


