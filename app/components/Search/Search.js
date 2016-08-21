(function () {
  'use strict';
  angular
    .module('Playlistr.Search', [
      'ngMaterial',
    ])
    .controller('SearchController', ['$rootScope', '$http', '$log', function SearchController ($rootScope, $http, $log) {
      var self = this
      self.isDisabled = false
      self.search = search;
      self.selectItem = selectItem;

      function search (query) {
        if (query === '') {
          return []
        }
        return $http.jsonp('https://itunes.apple.com/search', {
          params: {
            term: query,
            country: 'GB',
            media: 'music',
            entity: 'song',
            callback: 'JSON_CALLBACK',
          }
        }).then(function (result) {
          return result.data.results
        })
      }

      function selectItem(item) {
        if (item) {
          $log.info(item)
          $rootScope.tracks.push(item)
          self.searchText = null
        }
      }
    }])
})()


