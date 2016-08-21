(function () {
  'use strict';
  angular
    .module('Playlistr.Search', [
      'ngMaterial',
    ])
    .controller('SearchController', ['trackService', function SearchController (trackService) {
      this.search = trackService.search
      this.selectItem = item => {
        if (item) {
          trackService.addTrack(item)
          this.searchText = null
        }
      }
    }])
})()


