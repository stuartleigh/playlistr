(function () {
  'use strict';

  angular
    .module('Playlistr.TrackService', [])
    .factory('trackService', ['$rootScope', '$http', function TrackService ($rootScope, $http) {

      this.tracks = $rootScope.tracks

      return {
        tracks: $rootScope.tracks,

        addTrack: track => {
          $rootScope.tracks.push(track)
        },

        removeTrack: index => {
          $rootScope.tracks.splice(index, 1)
        },

        search: term => {
          if (!term || term === '') {
            return []
          }
          return $http.jsonp('https://itunes.apple.com/search', {
            params: {
              term,
              country: 'GB',
              media: 'music',
              entity: 'song',
              callback: 'JSON_CALLBACK',
            }
          }).then(function (result) {
            return result.data.results
          })
        },
      }

    }])
})()
