(function () {
  "use strict"

  angular
    .module('Playlistr.TrackDirectives', [])
    .directive('plCumulativeTime', ['trackService', function (trackService) {

      return {
        scope: {
          index: '@',
        },
        link: ($scope, element, attrs) => {
          element.text(trackService.getCumulativeTotal($scope.index).format('h [hrs] m [mins] s [sec]'))
        },
      };
    }]);
})()
