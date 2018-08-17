angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    detail: '<',
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
