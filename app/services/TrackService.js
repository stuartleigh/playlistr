(function () {
  'use strict';

  angular
    .module('Playlistr.TrackService', [])
    .factory('trackService', ['$http', 'moment', function TrackService ($http, moment) {
      const LS_TRACK_KEY = 'playlistr.tracks'

      this.tracks = JSON.parse(localStorage.getItem(LS_TRACK_KEY)) || []

      return {
        tracks: this.tracks,

        addTrack: track => {
          this.tracks.push(track)
          localStorage.setItem(LS_TRACK_KEY, JSON.stringify(this.tracks))
        },

        removeTrack: index => {
          this.tracks.splice(index, 1)
          localStorage.setItem(LS_TRACK_KEY, JSON.stringify(this.tracks))
        },

        getCumulativeTotal: index => {
          const totalMilliseconds = this.tracks.slice(0, index).reduce((acc, track) => acc += track.trackTimeMillis, 0)
          return moment.duration(totalMilliseconds)
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
