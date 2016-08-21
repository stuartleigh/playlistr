(function () {
  'use strict';
  angular
    .module('Playlistr.TrackList', [
      'ngMaterial',
    ])
    .controller('TrackListController', ['trackService', function TrackListController (trackService) {
      this.tracks = trackService.tracks
      this.removeTrack = trackService.removeTrack
    }])
})()
