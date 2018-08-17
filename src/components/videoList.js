angular.module('video-player')
.component('videoList', {
  bindings: {
    detail: '<',
    change: '<'
  },
  templateUrl: 'src/templates/videoList.html'
});
